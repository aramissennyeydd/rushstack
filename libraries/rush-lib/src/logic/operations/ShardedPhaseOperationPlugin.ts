// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import type { IPhase } from '../../api/CommandLineConfiguration';
import type {
  ICreateOperationsContext,
  IPhasedCommandPlugin,
  PhasedCommandHooks
} from '../../pluginFramework/PhasedCommandHooks';
import { NullOperationRunner } from './NullOperationRunner';
import { Operation } from './Operation';
import { OperationStatus } from './OperationStatus';
import { ShellOperationRunner } from './ShellOperationRunner';
import {
  formatCommand,
  getCustomParameterValuesByPhase,
  getDisplayName,
  getScriptToRun,
  initializeShellOperationRunner
} from './ShellOperationRunnerPlugin';

export const PLUGIN_NAME: 'ShardedPhasedOperationPlugin' = 'ShardedPhasedOperationPlugin';

// eslint-disable-next-line @typescript-eslint/typedef
const TemplateStrings = {
  SHARD_INDEX: '{shardIndex}',
  SHARD_COUNT: '{shardCount}'
} as const;

// eslint-disable-next-line @typescript-eslint/typedef
const TemplateStringRegexes = {
  SHARD_INDEX: new RegExp(TemplateStrings.SHARD_INDEX, 'g'),
  SHARD_COUNT: new RegExp(TemplateStrings.SHARD_COUNT, 'g')
} as const;

/**
 * Phased command that shards a phase into multiple operations.
 */
export class ShardedPhasedOperationPlugin implements IPhasedCommandPlugin {
  public apply(hooks: PhasedCommandHooks): void {
    hooks.createOperations.tap(PLUGIN_NAME, spliceShards);
  }
}

function spliceShards(existingOperations: Set<Operation>, context: ICreateOperationsContext): Set<Operation> {
  const { rushConfiguration } = context;

  const getCustomParameterValuesForPhase: (phase: IPhase) => ReadonlyArray<string> =
    getCustomParameterValuesByPhase();

  for (const operation of existingOperations) {
    const { associatedPhase: phase, associatedProject: project, settings: operationSettings } = operation;
    if (phase && project && operationSettings?.sharding && !operation.runner) {
      const { count: shards } = operationSettings.sharding;

      /**
       * A single operation to reduce the number of edges in the graph when creating shards.
       * depA -\          /- shard 1 -\
       * depB -- > noop < -- shard 2 -- > collator (reused operation)
       * depC -/          \- shard 3 -/
       */
      const preShardOperation = new Operation({
        phase,
        project,
        runner: new NullOperationRunner({
          name: `${getDisplayName(phase, project)} - pre-shard`,
          result: OperationStatus.NoOp,
          silent: true
        })
      });

      for (const dependency of operation.dependencies) {
        preShardOperation.addDependency(dependency);
        operation.deleteDependency(dependency);
      }

      const parentFolderFormat: string =
        operationSettings.sharding.outputFolderArgument?.parentFolderName ??
        `.rush/operations/${phase.logFilenameIdentifier}/shards`;

      const parentFolder: string = parentFolderFormat;

      const collatorDisplayName: string = `${getDisplayName(phase, project)} - collate`;

      const customParameters: readonly string[] = getCustomParameterValuesForPhase(phase);

      const collatorParameters = [
        ...customParameters,
        `--shard-parent-folder=${parentFolder}`,
        `--shard-count=${shards}`
      ];
      initializeShellOperationRunner({
        phase,
        project,
        operation,
        displayName: collatorDisplayName,
        rushConfiguration,
        customParameterValues: collatorParameters
      });

      const baseCommand: string | undefined = getScriptToRun(project, `${phase.name}:shard`, undefined);
      if (baseCommand === undefined) {
        throw new Error(
          `The project '${project.packageName}' does not define a '${phase.name}:shard' command in the 'scripts' section of its package.json`
        );
      }

      const shardArgumentFormat: string =
        operationSettings.sharding.shardArgumentFormat ??
        `--shard=${TemplateStrings.SHARD_INDEX}/${TemplateStrings.SHARD_COUNT}`;
      const outputFolderArgumentFlag: string =
        operationSettings.sharding.outputFolderArgument?.parameterLongName ?? '--shard-output-directory';

      if (
        operationSettings.sharding.shardArgumentFormat &&
        !shardArgumentFormat.includes(TemplateStrings.SHARD_INDEX) &&
        !shardArgumentFormat.includes(TemplateStrings.SHARD_COUNT)
      ) {
        throw new Error(
          `'shardArgumentFormat' must contain both ${TemplateStrings.SHARD_INDEX} and ${TemplateStrings.SHARD_COUNT} to be used for sharding.`
        );
      }

      for (let shard: number = 1; shard <= shards; shard++) {
        const outputDirectory: string = `${parentFolder}/${shard}`;

        const shardOperation: Operation = new Operation({
          project,
          phase,
          settings: {
            ...operationSettings,
            outputFolderNames: [outputDirectory]
          }
        });

        const shardArgument: string = shardArgumentFormat
          .replace(TemplateStringRegexes.SHARD_INDEX, shard.toString())
          .replace(TemplateStringRegexes.SHARD_COUNT, shards.toString());

        const outputDirectoryArgument: string = `${outputFolderArgumentFlag}="${outputDirectory}"`;
        const shardedParameters: string[] = [...customParameters, shardArgument, outputDirectoryArgument];

        const shardDisplayName: string = `${getDisplayName(phase, project)} - shard ${shard}/${shards}`;
        initializeShellOperationRunner({
          phase,
          project,
          operation,
          displayName: shardDisplayName,
          rushConfiguration,
          customParameterValues: shardedParameters
        });

        const shardedCommandToRun: string | undefined = baseCommand
          ? formatCommand(baseCommand, shardedParameters)
          : undefined;

        if (shardedCommandToRun) {
          const shardedShellOperationRunner: ShellOperationRunner = new ShellOperationRunner({
            commandToRun: shardedCommandToRun,
            displayName: shardDisplayName,
            phase,
            rushConfiguration,
            rushProject: project
          });
          shardOperation.runner = shardedShellOperationRunner;
        } else {
          shardOperation.runner = new NullOperationRunner({
            name: shardDisplayName,
            result: OperationStatus.NoOp,
            silent: phase.missingScriptBehavior === 'silent'
          });
        }

        shardOperation.addDependency(preShardOperation);
        existingOperations.add(shardOperation);
      }
      for (const dependency of operation.dependencies) {
        operation.deleteDependency(dependency);
      }
    }
  }

  return existingOperations;
}