// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import colors from 'colors/safe';
import * as path from 'path';
import * as semver from 'semver';
import { FileSystem, FileConstants, AlreadyReportedError, Async } from '@rushstack/node-core-library';

import { BaseInstallManager } from '../base/BaseInstallManager';
import type { IInstallManagerOptions } from '../base/BaseInstallManagerTypes';
import { BaseShrinkwrapFile } from '../../logic/base/BaseShrinkwrapFile';
import { DependencySpecifier, DependencySpecifierType } from '../DependencySpecifier';
import { PackageJsonEditor, DependencyType } from '../../api/PackageJsonEditor';
import { PnpmWorkspaceFile } from '../pnpm/PnpmWorkspaceFile';
import { RushConfigurationProject } from '../../api/RushConfigurationProject';
import { RushConstants } from '../../logic/RushConstants';
import { Utilities } from '../../utilities/Utilities';
import { InstallHelpers } from './InstallHelpers';
import { CommonVersionsConfiguration } from '../../api/CommonVersionsConfiguration';
import { RepoStateFile } from '../RepoStateFile';
import { LastLinkFlagFactory } from '../../api/LastLinkFlag';
import { EnvironmentConfiguration } from '../../api/EnvironmentConfiguration';
import { ShrinkwrapFileFactory } from '../ShrinkwrapFileFactory';
import { BaseProjectShrinkwrapFile } from '../base/BaseProjectShrinkwrapFile';
import { PnpmProjectShrinkwrapFile } from '../pnpm/PnpmProjectShrinkwrapFile';
import { PnpmShrinkwrapFile } from '../pnpm/PnpmShrinkwrapFile';
import { SplitWorkspacePnpmfileConfiguration } from '../pnpm/SplitWorkspacePnpmfileConfiguration';
import { type CustomTipId, type ICustomTipInfo, PNPM_CUSTOM_TIPS } from '../../api/CustomTipsConfiguration';

/**
 * This class implements common logic between "rush install" and "rush update".
 */
export class WorkspaceInstallManager extends BaseInstallManager {
  /**
   * @override
   */
  public async doInstallAsync(): Promise<void> {
    // TODO: Remove when "rush link" and "rush unlink" are deprecated
    if (this.options.noLink) {
      console.log(
        colors.red(
          'The "--no-link" option was provided but is not supported when using workspaces. Run the command again ' +
            'without specifying this argument.'
        )
      );
      throw new AlreadyReportedError();
    }

    await super.doInstallAsync();
  }

  /**
   * Regenerates the common/temp/package.json and related workspace files.
   * If shrinkwrapFile is provided, this function also validates whether it contains
   * everything we need to install and returns true if so; in all other cases,
   * the return value is false.
   *
   * @override
   */
  protected async prepareCommonTempAsync(
    shrinkwrapFile: BaseShrinkwrapFile | undefined,
    splitWorkspaceShrinkwrapFile?: BaseShrinkwrapFile
  ): Promise<{ shrinkwrapIsUpToDate: boolean; shrinkwrapWarnings: string[] }> {
    // Block use of the RUSH_TEMP_FOLDER environment variable
    if (EnvironmentConfiguration.rushTempFolderOverride !== undefined) {
      throw new Error(
        'The RUSH_TEMP_FOLDER environment variable is not compatible with workspace installs. If attempting ' +
          'to move the PNPM store path, see the `RUSH_PNPM_STORE_PATH` environment variable.'
      );
    }

    console.log('\n' + colors.bold('Updating workspace files in ' + this.rushConfiguration.commonTempFolder));

    const shrinkwrapWarnings: string[] = [];

    // We will start with the assumption that it's valid, and then set it to false if
    // any of the checks fail
    let shrinkwrapIsUpToDate: boolean = true;

    if (!shrinkwrapFile) {
      shrinkwrapIsUpToDate = false;
    } else {
      if (!shrinkwrapFile.isWorkspaceCompatible && !this.options.fullUpgrade) {
        console.log();
        console.log(
          colors.red(
            'The shrinkwrap file has not been updated to support workspaces. Run "rush update --full" to update ' +
              'the shrinkwrap file.'
          )
        );
        throw new AlreadyReportedError();
      }

      // If there are orphaned projects, we need to update
      const orphanedProjects: ReadonlyArray<string> = shrinkwrapFile.findOrphanedProjects(
        this.rushConfiguration
      );
      if (orphanedProjects.length > 0) {
        for (const orhpanedProject of orphanedProjects) {
          shrinkwrapWarnings.push(
            `Your ${this.rushConfiguration.shrinkwrapFilePhrase} references "${orhpanedProject}" ` +
              'which was not found in rush.json'
          );
        }
        shrinkwrapIsUpToDate = false;
      }
    }

    if (this.options.includeSplitWorkspace && this.rushConfiguration.hasSplitWorkspaceProject) {
      if (!splitWorkspaceShrinkwrapFile) {
        // There are chances that shared-workspace-lockfile=false,
        // so individual shrinkwrap for each split workspace project
      } else {
        if (!splitWorkspaceShrinkwrapFile.isWorkspaceCompatible && !this.options.fullUpgrade) {
          console.log();
          console.log(
            colors.red(
              'The shrinkwrap file has not been updated to support workspaces. Run "rush update --full" to update ' +
                'the shrinkwrap file.'
            )
          );
          throw new AlreadyReportedError();
        }

        // If there are orphaned projects, we need to update
        const orphanedProjects: ReadonlyArray<string> = splitWorkspaceShrinkwrapFile.findOrphanedProjects(
          this.rushConfiguration
        );
        if (orphanedProjects.length > 0) {
          for (const orhpanedProject of orphanedProjects) {
            shrinkwrapWarnings.push(
              `Your ${this.rushConfiguration.splitWorkspaceShrinkwrapFilename} references "${orhpanedProject}" ` +
                'which was not found in rush.json'
            );
          }
          shrinkwrapIsUpToDate = false;
        }
      }
    }

    // FIXME: Do we need take split workspace into consideration when getting repo state?

    // If preferred versions have been updated, or if the repo-state.json is invalid,
    // we can't be certain of the state of the shrinkwrap
    const repoState: RepoStateFile = this.rushConfiguration.getRepoState(this.options.variant);
    if (!repoState.isValid) {
      shrinkwrapWarnings.push(
        `The ${RushConstants.repoStateFilename} file is invalid. There may be a merge conflict marker in the file.`
      );
      shrinkwrapIsUpToDate = false;
    } else {
      const commonVersions: CommonVersionsConfiguration = this.rushConfiguration.getCommonVersions(
        this.options.variant
      );
      if (repoState.preferredVersionsHash !== commonVersions.getPreferredVersionsHash()) {
        shrinkwrapWarnings.push(
          `Preferred versions from ${RushConstants.commonVersionsFilename} have been modified.`
        );
        shrinkwrapIsUpToDate = false;
      }
    }

    // To generate the workspace file, we will add each project to the file as we loop through and validate
    const workspaceFile: PnpmWorkspaceFile = new PnpmWorkspaceFile(
      path.join(this.rushConfiguration.commonTempFolder, 'pnpm-workspace.yaml')
    );

    let splitWorkspaceFile: PnpmWorkspaceFile | undefined = undefined;

    if (this.options.includeSplitWorkspace && this.rushConfiguration.hasSplitWorkspaceProject) {
      splitWorkspaceFile = new PnpmWorkspaceFile(
        path.join(this.rushConfiguration.commonTempSplitFolder, 'pnpm-workspace.yaml')
      );
    }

    // Loop through the projects and add them to the workspace file. While we're at it, also validate that
    // referenced workspace projects are valid, and check if the shrinkwrap file is already up-to-date.
    for (const rushProject of this.rushConfiguration.projects) {
      if (!this.options.includeSplitWorkspace && rushProject.splitWorkspace) {
        // Skip processing split workspace project when they are not included
        continue;
      }

      const packageJson: PackageJsonEditor = rushProject.packageJsonEditor;

      let targetWorkspaceFile: PnpmWorkspaceFile = workspaceFile;
      if (splitWorkspaceFile && rushProject.splitWorkspace) {
        targetWorkspaceFile = splitWorkspaceFile;
      }
      targetWorkspaceFile.addPackage(rushProject.projectFolder);

      for (const { name, version, dependencyType } of [
        ...packageJson.dependencyList,
        ...packageJson.devDependencyList
      ]) {
        // Allow the package manager to handle peer dependency resolution, since this is simply a constraint
        // enforced by the package manager. Additionally, peer dependencies are simply a version constraint
        // and do not need to be converted to workspaces protocol.
        if (dependencyType === DependencyType.Peer) {
          continue;
        }

        const dependencySpecifier: DependencySpecifier = new DependencySpecifier(name, version);

        // Is there a locally built Rush project that could satisfy this dependency?
        const referencedLocalProject: RushConfigurationProject | undefined =
          this.rushConfiguration.getProjectByName(name);

        // Validate that local projects are referenced with workspace notation. If not, and it is not a
        // cyclic dependency, then it needs to be updated to specify `workspace:*` explicitly. Currently only
        // supporting versions and version ranges for specifying a local project.
        if (
          (dependencySpecifier.specifierType === DependencySpecifierType.Version ||
            dependencySpecifier.specifierType === DependencySpecifierType.Range) &&
          referencedLocalProject &&
          !rushProject.decoupledLocalDependencies.has(name)
        ) {
          // Make sure that this version is intended to target a local package. If not, then we will fail since it
          // is not explicitly specified as a cyclic dependency.
          if (
            !semver.satisfies(
              referencedLocalProject.packageJsonEditor.version,
              dependencySpecifier.versionSpecifier
            )
          ) {
            console.log();
            console.log(
              colors.red(
                `"${rushProject.packageName}" depends on package "${name}" (${version}) which exists ` +
                  'within the workspace but cannot be fulfilled with the specified version range. Either ' +
                  'specify a valid version range, or add the package as a cyclic dependency.'
              )
            );
            throw new AlreadyReportedError();
          }

          if (!this.options.allowShrinkwrapUpdates) {
            console.log();
            console.log(
              colors.red(
                `"${rushProject.packageName}" depends on package "${name}" (${version}) which exists within ` +
                  'the workspace. Run "rush update" to update workspace references for this package.'
              )
            );
            throw new AlreadyReportedError();
          }

          if (this.options.fullUpgrade) {
            // We will update to `workspace` notation. If the version specified is a range, then use the provided range.
            // Otherwise, use `workspace:*` to ensure we're always using the workspace package.
            const workspaceRange: string =
              !!semver.validRange(dependencySpecifier.versionSpecifier) &&
              !semver.valid(dependencySpecifier.versionSpecifier)
                ? dependencySpecifier.versionSpecifier
                : '*';
            packageJson.addOrUpdateDependency(name, `workspace:${workspaceRange}`, dependencyType);
            shrinkwrapIsUpToDate = false;
            continue;
          }
        } else if (dependencySpecifier.specifierType === DependencySpecifierType.Workspace) {
          // Already specified as a local project. Allow the package manager to validate this
          continue;
        }
      }

      // Save the package.json if we modified the version references and warn that the package.json was modified
      if (packageJson.saveIfModified()) {
        console.log(
          colors.yellow(
            `"${rushProject.packageName}" depends on one or more workspace packages which did not use "workspace:" ` +
              'notation. The package.json has been modified and must be committed to source control.'
          )
        );
      }

      // Now validate that the shrinkwrap file matches what is in the package.json
      if (rushProject.splitWorkspace) {
        if (splitWorkspaceShrinkwrapFile) {
          if (await splitWorkspaceShrinkwrapFile.isWorkspaceProjectModifiedAsync(rushProject)) {
            shrinkwrapWarnings.push(
              `Dependencies of project "${rushProject.packageName}" do not match the current shrinkwrap.`
            );
            shrinkwrapIsUpToDate = false;
          }
        } else {
          // full install or project selected
          if (!this.options.selectedProjects || this.options.selectedProjects.has(rushProject)) {
            const splitWorkspaceProjectShrinkwrapFilepath: string = path.join(
              rushProject.projectFolder,
              RushConstants.pnpmV3ShrinkwrapFilename
            );
            const splitWorkspaceProjectShrinkwrapFile: PnpmShrinkwrapFile | undefined =
              PnpmShrinkwrapFile.loadFromFile(splitWorkspaceProjectShrinkwrapFilepath);
            if (!splitWorkspaceProjectShrinkwrapFile) {
              const { dependencyList, devDependencyList } = rushProject.packageJsonEditor;
              // If there is no dependencies or devDependencies in package.json, shrinkwrap file will be not generated.
              if (dependencyList.length !== 0 || devDependencyList.length !== 0) {
                shrinkwrapIsUpToDate = false;
              }
            } else {
              // All split workspace projects share one splitWorkspacePnpmfileConfiguration
              const splitWorkspacePnpmfileConfiguration: SplitWorkspacePnpmfileConfiguration =
                new SplitWorkspacePnpmfileConfiguration(this.rushConfiguration);
              splitWorkspaceProjectShrinkwrapFile.setIndividualPackage(
                rushProject.packageName,
                splitWorkspacePnpmfileConfiguration
              );
              if (
                splitWorkspaceProjectShrinkwrapFile.isSplitWorkspaceIndividualProjectModified(rushProject)
              ) {
                shrinkwrapIsUpToDate = false;
              }
            }
          }
        }
      } else {
        if (await shrinkwrapFile?.isWorkspaceProjectModifiedAsync(rushProject, this.options.variant)) {
          shrinkwrapWarnings.push(
            `Dependencies of project "${rushProject.packageName}" do not match the current shrinkwrap.`
          );
          shrinkwrapIsUpToDate = false;
        }
      }
    }

    // Write the common package.json
    InstallHelpers.generateCommonPackageJson(this.rushConfiguration);
    if (this.options.includeSplitWorkspace && this.rushConfiguration.hasSplitWorkspaceProject) {
      InstallHelpers.generateCommonSplitPackageJson(this.rushConfiguration);
    }

    // Save the generated workspace file. Don't update the file timestamp unless the content has changed,
    // since "rush install" will consider this timestamp
    workspaceFile.save(workspaceFile.workspaceFilename, { onlyIfChanged: true });
    splitWorkspaceFile?.save(splitWorkspaceFile.workspaceFilename, { onlyIfChanged: true });

    return { shrinkwrapIsUpToDate, shrinkwrapWarnings };
  }

  protected canSkipInstall(lastModifiedDate: Date, splitWorkspaceLastModifiedDate?: Date): boolean {
    if (!super.canSkipInstall(lastModifiedDate)) {
      return false;
    }

    const potentiallyChangedFiles: string[] = [];

    if (this.rushConfiguration.packageManager === 'pnpm') {
      // Add workspace file. This file is only modified when workspace packages change.
      const pnpmWorkspaceFilename: string = path.join(
        this.rushConfiguration.commonTempFolder,
        'pnpm-workspace.yaml'
      );

      if (FileSystem.exists(pnpmWorkspaceFilename)) {
        potentiallyChangedFiles.push(pnpmWorkspaceFilename);
      }
    }

    // Also consider timestamps for all the project node_modules folders, as well as the package.json
    // files
    // Example: [ "C:\MyRepo\projects\projectA\node_modules", "C:\MyRepo\projects\projectA\package.json" ]
    potentiallyChangedFiles.push(
      ...this.rushConfiguration.getFilteredProjects({ splitWorkspace: false }).map((project) => {
        return path.join(project.projectFolder, RushConstants.nodeModulesFolderName);
      }),
      ...this.rushConfiguration.getFilteredProjects({ splitWorkspace: false }).map((project) => {
        return path.join(project.projectFolder, FileConstants.PackageJson);
      })
    );

    // NOTE: If any of the potentiallyChangedFiles does not exist, then isFileTimestampCurrent()
    // returns false.
    const isFileTimestampCurrent: boolean = Utilities.isFileTimestampCurrent(
      lastModifiedDate,
      potentiallyChangedFiles
    );

    // Check timestamp for split workspace
    let isSplitWorkspaceFileTimestampCurrent: boolean = true;
    if (splitWorkspaceLastModifiedDate && this.options.includeSplitWorkspace) {
      let selectedSplitWorkspaceProjects: RushConfigurationProject[] = [];
      if (!this.options.selectedProjects) {
        // full
        selectedSplitWorkspaceProjects = this.rushConfiguration.getFilteredProjects({ splitWorkspace: true });
      } else {
        this.options.selectedProjects.forEach((project) => {
          if (project.splitWorkspace) {
            selectedSplitWorkspaceProjects.push(project);
          }
        });
      }

      const splitWorkspacePotentiallyChangedFiles: string[] = [];
      if (this.rushConfiguration.packageManager === 'pnpm') {
        // Add workspace file. This file is only modified when workspace packages change.
        const pnpmWorkspaceFilename: string = path.join(
          this.rushConfiguration.commonTempSplitFolder,
          'pnpm-workspace.yaml'
        );

        if (FileSystem.exists(pnpmWorkspaceFilename)) {
          splitWorkspacePotentiallyChangedFiles.push(pnpmWorkspaceFilename);
        }
      }

      for (const project of selectedSplitWorkspaceProjects) {
        splitWorkspacePotentiallyChangedFiles.push(
          path.join(project.projectFolder, RushConstants.nodeModulesFolderName),
          path.join(project.projectFolder, FileConstants.PackageJson)
        );

        // Check individual shrinkwrap file changed
        const individualShrinkwrapFilePath: string = path.join(
          project.projectFolder,
          RushConstants.pnpmV3ShrinkwrapFilename
        );
        if (FileSystem.exists(individualShrinkwrapFilePath)) {
          splitWorkspacePotentiallyChangedFiles.push(individualShrinkwrapFilePath);
        }
      }

      isSplitWorkspaceFileTimestampCurrent = Utilities.isFileTimestampCurrent(
        splitWorkspaceLastModifiedDate,
        splitWorkspacePotentiallyChangedFiles
      );
    }

    return isFileTimestampCurrent && isSplitWorkspaceFileTimestampCurrent;
  }

  /**
   * Runs "npm install" in the common folder.
   */
  protected async installAsync(cleanInstall: boolean): Promise<void> {
    // Example: "C:\MyRepo\common\temp\npm-local\node_modules\.bin\npm"
    const packageManagerFilename: string = this.rushConfiguration.packageManagerToolFilename;

    const packageManagerEnv: NodeJS.ProcessEnv = InstallHelpers.getPackageManagerEnvironment(
      this.rushConfiguration,
      this.options
    );

    const commonNodeModulesFolder: string = path.join(
      this.rushConfiguration.commonTempFolder,
      RushConstants.nodeModulesFolderName
    );

    // Is there an existing "node_modules" folder to consider?
    if (FileSystem.exists(commonNodeModulesFolder)) {
      // Should we delete the entire "node_modules" folder?
      if (cleanInstall) {
        // YES: Delete "node_modules"

        // Explain to the user why we are hosing their node_modules folder
        console.log('Deleting files from ' + commonNodeModulesFolder);

        this.installRecycler.moveFolder(commonNodeModulesFolder);

        Utilities.createFolderWithRetry(commonNodeModulesFolder);
      }
    }

    const doInstallInternalAsync = async (options: IInstallManagerOptions): Promise<void> => {
      // Run "npm install" in the common folder
      // To ensure that the output is always colored, set the option "--color=always", even when it's piped.
      // Without this argument, certain text that should be colored (such as red) will appear white.
      const installArgs: string[] = ['install', '--color=always'];
      this.pushConfigurationArgs(installArgs, options);

      console.log(
        '\n' +
          colors.bold(
            `Running "${this.rushConfiguration.packageManager} install" in` +
              ` ${this.rushConfiguration.commonTempFolder}`
          ) +
          '\n'
      );

      // If any diagnostic options were specified, then show the full command-line
      if (
        this.options.debug ||
        this.options.collectLogFile ||
        this.options.networkConcurrency ||
        this.options.onlyShrinkwrap
      ) {
        console.log(
          '\n' +
            colors.green('Invoking package manager: ') +
            FileSystem.getRealPath(packageManagerFilename) +
            ' ' +
            installArgs.join(' ') +
            '\n'
        );
      }

      // Store the tip IDs that should be printed.
      // They will be printed all at once *after* the install
      const tipIDsToBePrinted: Set<CustomTipId> = new Set();
      const pnpmTips: ICustomTipInfo[] = [];
      for (const [customTipId, customTip] of Object.entries(PNPM_CUSTOM_TIPS)) {
        if (
          this.rushConfiguration.customTipsConfiguration.providedCustomTipsByTipId.has(
            customTipId as CustomTipId
          )
        ) {
          pnpmTips.push(customTip);
        }
      }

      const onPnpmStdoutChunk: ((chunk: string) => void) | undefined =
        pnpmTips.length > 0
          ? (chunk: string): void => {
              // Iterate over the supported custom tip metadata and try to match the chunk.
              for (const { isMatch, tipId } of pnpmTips) {
                if (isMatch?.(chunk)) {
                  tipIDsToBePrinted.add(tipId);
                }
              }
            }
          : undefined;

      try {
        await Utilities.executeCommandAndProcessOutputWithRetryAsync(
          {
            command: packageManagerFilename,
            args: installArgs,
            workingDirectory: this.rushConfiguration.commonTempFolder,
            environment: packageManagerEnv,
            suppressOutput: false
          },
          this.options.maxInstallAttempts,
          onPnpmStdoutChunk,
          () => {
            if (this.rushConfiguration.packageManager === 'pnpm') {
              this._terminal.writeWarningLine(`Deleting the "node_modules" folder`);
              this.installRecycler.moveFolder(commonNodeModulesFolder);

              // Leave the pnpm-store as is for the retry. This ensures that packages that have already
              // been downloaded need not be downloaded again, thereby potentially increasing the chances
              // of a subsequent successful install.

              Utilities.createFolderWithRetry(commonNodeModulesFolder);
            }
          }
        );
      } finally {
        // The try-finally is to avoid the tips NOT being printed if the install fails.
        // NOT catching the error because we want to keep the other behaviors (i.e., the error will be caught and handle in upper layers).

        if (tipIDsToBePrinted.size > 0) {
          this._terminal.writeLine();
          for (const tipID of tipIDsToBePrinted) {
            this.rushConfiguration.customTipsConfiguration._showTip(this._terminal, tipID);
          }
        }
      }
    };

    const { configuration: experiments } = this.rushConfiguration.experimentsConfiguration;
    if (
      this.options.allowShrinkwrapUpdates &&
      experiments.usePnpmLockfileOnlyThenFrozenLockfileForRushUpdate
    ) {
      await doInstallInternalAsync({
        ...this.options,
        onlyShrinkwrap: true
      });

      await doInstallInternalAsync({
        ...this.options,
        allowShrinkwrapUpdates: false
      });
    } else {
      await doInstallInternalAsync(this.options);
    }

    if (this.options.includeSplitWorkspace && this.rushConfiguration.hasSplitWorkspaceProject) {
      // Install for split workspace
      const splitWorkspaceNodeModulesFolder: string = path.join(
        this.rushConfiguration.commonTempSplitFolder,
        RushConstants.nodeModulesFolderName
      );

      // Is there an existing "node_modules" folder to consider?
      if (FileSystem.exists(splitWorkspaceNodeModulesFolder)) {
        // Should we delete the entire "node_modules" folder?
        if (cleanInstall) {
          // YES: Delete "node_modules"

          // Explain to the user why we are hosing their node_modules folder
          console.log('Deleting files from ' + splitWorkspaceNodeModulesFolder);

          this.installRecycler.moveFolder(splitWorkspaceNodeModulesFolder);

          Utilities.createFolderWithRetry(splitWorkspaceNodeModulesFolder);
        }
      }

      const doInstalInternalSplitWorkspaceAsync = async (): Promise<void> => {
        // Run "npm install" in the common folder
        const installArgs: string[] = ['install'];
        this.pushConfigurationArgsForSplitWorkspace(installArgs, this.options);

        console.log(
          '\n' +
            colors.bold(
              `Running "${this.rushConfiguration.packageManager} install" in` +
                ` ${this.rushConfiguration.commonTempSplitFolder}`
            ) +
            '\n'
        );

        // If any diagnostic options were specified, then show the full command-line
        if (this.options.debug || this.options.collectLogFile || this.options.networkConcurrency) {
          console.log(
            '\n' +
              colors.green('Invoking package manager: ') +
              FileSystem.getRealPath(packageManagerFilename) +
              ' ' +
              installArgs.join(' ') +
              '\n'
          );
        }

        // Store the tip IDs that should be printed.
        // They will be printed all at once *after* the install
        const tipIDsToBePrinted: Set<CustomTipId> = new Set();
        const pnpmTips: ICustomTipInfo[] = [];
        for (const [customTipId, customTip] of Object.entries(PNPM_CUSTOM_TIPS)) {
          if (
            this.rushConfiguration.customTipsConfiguration.providedCustomTipsByTipId.has(
              customTipId as CustomTipId
            )
          ) {
            pnpmTips.push(customTip);
          }
        }

        const onPnpmStdoutChunk: ((chunk: string) => void) | undefined =
          pnpmTips.length > 0
            ? (chunk: string): void => {
                // Iterate over the supported custom tip metadata and try to match the chunk.
                for (const { isMatch, tipId } of pnpmTips) {
                  if (isMatch?.(chunk)) {
                    tipIDsToBePrinted.add(tipId);
                  }
                }
              }
            : undefined;

        try {
          await Utilities.executeCommandAndProcessOutputWithRetryAsync(
            {
              command: packageManagerFilename,
              args: installArgs,
              workingDirectory: this.rushConfiguration.commonTempSplitFolder,
              environment: packageManagerEnv,
              suppressOutput: false
            },
            this.options.maxInstallAttempts,
            onPnpmStdoutChunk,
            () => {
              if (this.rushConfiguration.packageManager === 'pnpm') {
                console.log(colors.yellow(`Deleting the "node_modules" folder`));
                this.installRecycler.moveFolder(splitWorkspaceNodeModulesFolder);

                // Leave the pnpm-store as is for the retry. This ensures that packages that have already
                // been downloaded need not be downloaded again, thereby potentially increasing the chances
                // of a subsequent successful install.

                Utilities.createFolderWithRetry(splitWorkspaceNodeModulesFolder);
              }
            }
          );
        } finally {
          if (tipIDsToBePrinted.size > 0) {
            this._terminal.writeLine();
            for (const tipID of tipIDsToBePrinted) {
              this.rushConfiguration.customTipsConfiguration._showTip(this._terminal, tipID);
            }
          }
        }
      };

      await doInstalInternalSplitWorkspaceAsync();
    }

    // If all attempts fail we just terminate. No special handling needed.

    // Ensure that node_modules folders exist after install, since the timestamps on these folders are used
    // to determine if the install can be skipped
    const projectNodeModulesFolders: string[] = [
      path.join(this.rushConfiguration.commonTempFolder, RushConstants.nodeModulesFolderName),
      ...this.rushConfiguration.projects.map((project) => {
        return path.join(project.projectFolder, RushConstants.nodeModulesFolderName);
      })
    ];

    if (this.options.includeSplitWorkspace && this.rushConfiguration.hasSplitWorkspaceProject) {
      projectNodeModulesFolders.push(
        path.join(this.rushConfiguration.commonTempSplitFolder, RushConstants.nodeModulesFolderName)
      );
    }

    for (const nodeModulesFolder of projectNodeModulesFolders) {
      FileSystem.ensureFolder(nodeModulesFolder);
    }

    console.log('');
  }

  protected async postInstallAsync(): Promise<void> {
    if (this.deferredInstallationScripts) {
      this.commonTempInstallFlag.saveIfModified();
      this.commonTempSplitInstallFlag?.saveIfModified();
    }

    // Grab the temp shrinkwrap, as this was the most recently completed install. It may also be
    // more up-to-date than the checked-in shrinkwrap since filtered installs are not written back.
    // Note that if there are no projects, or if we're in PNPM workspace mode and there are no
    // projects with dependencies, a lockfile won't be generated.
    const tempShrinkwrapFile: BaseShrinkwrapFile | undefined = ShrinkwrapFileFactory.getShrinkwrapFile(
      this.rushConfiguration.packageManager,
      this.rushConfiguration.pnpmOptions,
      this.rushConfiguration.tempShrinkwrapFilename
    );

    if (tempShrinkwrapFile) {
      // Write or delete all project shrinkwraps related to the install
      await Async.forEachAsync(
        this.rushConfiguration.getFilteredProjects({
          splitWorkspace: false
        }),
        async (project) => {
          await tempShrinkwrapFile.getProjectShrinkwrap(project)?.updateProjectShrinkwrapAsync();
        },
        { concurrency: 10 }
      );
    } else if (
      this.rushConfiguration.packageManager === 'pnpm' &&
      this.rushConfiguration.pnpmOptions?.useWorkspaces
    ) {
      // If we're in PNPM workspace mode and PNPM didn't create a shrinkwrap file,
      // there are no dependencies. Generate empty shrinkwrap files for all projects.
      await Async.forEachAsync(
        this.rushConfiguration.getFilteredProjects({
          splitWorkspace: false
        }),
        async (project) => {
          await BaseProjectShrinkwrapFile.saveEmptyProjectShrinkwrapFileAsync(project);
        },
        { concurrency: 10 }
      );
    } else {
      // This is an unexpected case
      throw new Error(
        'A shrinkwrap file does not exist after after successful installation. This probably indicates a ' +
          'bug in the package manager.'
      );
    }

    if (this.options.includeSplitWorkspace && this.rushConfiguration.hasSplitWorkspaceProject) {
      const tempShrinkwrapFile: BaseShrinkwrapFile | undefined = ShrinkwrapFileFactory.getShrinkwrapFile(
        this.rushConfiguration.packageManager,
        this.rushConfiguration.pnpmOptions,
        this.rushConfiguration.tempSplitWorkspaceShrinkwrapFilename
      );

      if (tempShrinkwrapFile) {
        // Write or delete all project shrinkwraps related to the install
        await Async.forEachAsync(
          this.rushConfiguration.getFilteredProjects({
            splitWorkspace: true
          }),
          async (project) => {
            await tempShrinkwrapFile.getProjectShrinkwrap(project)?.updateProjectShrinkwrapAsync();
          },
          { concurrency: 10 }
        );
      } else if (
        this.rushConfiguration.packageManager === 'pnpm' &&
        this.rushConfiguration.pnpmOptions?.useWorkspaces
      ) {
        // If we're in PNPM workspace mode and PNPM didn't create a shrinkwrap file,
        // there are individual workspace shrinkwrap for each project.
        await Async.forEachAsync(
          this.rushConfiguration.getFilteredProjects({
            splitWorkspace: true
          }),
          async (project) => {
            await PnpmProjectShrinkwrapFile.generateIndividualProjectShrinkwrapAsync(project);
          },
          { concurrency: 10 }
        );
      } else {
        // This is an unexpected case
        throw new Error(
          'A shrinkwrap file does not exist after after successful installation. This probably indicates a ' +
            'bug in the package manager.'
        );
      }
    }

    // TODO: Remove when "rush link" and "rush unlink" are deprecated
    LastLinkFlagFactory.getCommonTempFlag(this.rushConfiguration).create();

    // Stage 2 rebuild pending
    if (this.deferredInstallationScripts && !this.options.ignoreScripts) {
      // Example: "C:\MyRepo\common\temp\npm-local\node_modules\.bin\npm"
      const packageManagerFilename: string = this.rushConfiguration.packageManagerToolFilename;

      const packageManagerEnv: NodeJS.ProcessEnv = InstallHelpers.getPackageManagerEnvironment(
        this.rushConfiguration,
        this.options
      );

      const rebuildArgs: string[] = ['rebuild', '--pending'];
      this.pushRebuildArgs(rebuildArgs, this.options.pnpmFilterArguments);

      console.log(
        '\n' +
          colors.bold(
            `Running "${this.rushConfiguration.packageManager} rebuild --pending" in` +
              ` ${this.rushConfiguration.commonTempFolder}`
          ) +
          '\n'
      );

      // If any diagnostic options were specified, then show the full command-line
      if (this.options.debug || this.options.collectLogFile || this.options.networkConcurrency) {
        console.log(
          '\n' +
            colors.green('Invoking package manager: ') +
            FileSystem.getRealPath(packageManagerFilename) +
            ' ' +
            rebuildArgs.join(' ') +
            '\n'
        );
      }

      try {
        Utilities.executeCommand({
          command: packageManagerFilename,
          args: rebuildArgs,
          workingDirectory: this.rushConfiguration.commonTempFolder,
          environment: packageManagerEnv,
          suppressOutput: false
        });
      } catch (err) {
        throw new Error(`Encounter an error when running install lifecycle scripts. error: ${err.message}`);
      } finally {
        // Always save after pnpm rebuild to update timestamp of last install flag file.
        this.commonTempInstallFlag.create();
      }

      if (this.options.includeSplitWorkspace && this.rushConfiguration.hasSplitWorkspaceProject) {
        const rebuildArgs: string[] = ['rebuild', '--pending'];
        this.pushRebuildArgs(rebuildArgs, this.options.splitWorkspacePnpmFilterArguments);

        console.log(
          '\n' +
            colors.bold(
              `Running "${this.rushConfiguration.packageManager} rebuild --pending" in` +
                ` ${this.rushConfiguration.commonTempSplitFolder}`
            ) +
            '\n'
        );

        // If any diagnostic options were specified, then show the full command-line
        if (this.options.debug || this.options.collectLogFile || this.options.networkConcurrency) {
          console.log(
            '\n' +
              colors.green('Invoking package manager: ') +
              FileSystem.getRealPath(packageManagerFilename) +
              ' ' +
              rebuildArgs.join(' ') +
              '\n'
          );
        }

        try {
          Utilities.executeCommand({
            command: packageManagerFilename,
            args: rebuildArgs,
            workingDirectory: this.rushConfiguration.commonTempSplitFolder,
            environment: packageManagerEnv,
            suppressOutput: false
          });
        } catch (err) {
          throw new Error(`Encounter an error when running install lifecycle scripts. error: ${err.message}`);
        } finally {
          // Always save after pnpm rebuild to update timestamp of last install flag file.
          this.commonTempSplitInstallFlag?.create();
        }
      }
    }
  }

  /**
   * Used when invoking the NPM tool.  Appends the common configuration options
   * to the command-line.
   */
  protected pushConfigurationArgs(args: string[], options: IInstallManagerOptions): void {
    super.pushConfigurationArgs(args, options);

    // Add workspace-specific args
    if (this.rushConfiguration.packageManager === 'pnpm') {
      args.push('--recursive');
      args.push('--link-workspace-packages', 'false');

      if (process.stdout.isTTY) {
        // If we're on a TTY console and something else didn't set a `--reporter` parameter,
        // explicitly set the default reporter. This fixes an issue where, when the pnpm
        // output is being monitored to match custom tips, pnpm will detect a non-TTY
        // stdout stream and use the `append-only` reporter.
        //
        // See docs here: https://pnpm.io/cli/install#--reportername
        let includesReporterArg: boolean = false;
        for (const arg of args) {
          if (arg.startsWith('--reporter')) {
            includesReporterArg = true;
            break;
          }
        }

        if (!includesReporterArg) {
          args.push('--reporter', 'default');
        }
      }

      for (const arg of this.options.pnpmFilterArguments) {
        args.push(arg);
      }
    }
  }

  /**
   * Used when invoking pnpm rebuild for running deferred installation scripts.
   */
  protected pushRebuildArgs(args: string[], filterArguments: string[]): void {
    args.push('--recursive');

    if (
      this.rushConfiguration.pnpmOptions.pnpmStore === 'local' ||
      EnvironmentConfiguration.pnpmStorePathOverride
    ) {
      // pnpm rebuild does not accept --store-dir now... So, config.storeDir is used here
      args.push(`--config.storeDir=${this.rushConfiguration.pnpmOptions.pnpmStorePath}`);
    }

    if (this.options.collectLogFile) {
      args.push('--reporter', 'ndjson');
    }

    for (const arg of filterArguments) {
      args.push(arg);
    }
  }

  // Push installArgs for split workspace
  protected pushConfigurationArgsForSplitWorkspace(args: string[], options: IInstallManagerOptions): void {
    super.pushConfigurationArgs(args, options);

    // Add workspace-specific args
    if (this.rushConfiguration.packageManager === 'pnpm') {
      args.push('--recursive');
      args.push('--link-workspace-packages', 'false');

      for (const arg of this.options.splitWorkspacePnpmFilterArguments) {
        args.push(arg);
      }
    }
  }
}
