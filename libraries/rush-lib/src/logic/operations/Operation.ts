﻿// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import type { RushConfigurationProject } from '../../api/RushConfigurationProject';
import type { IPhase } from '../../api/CommandLineConfiguration';
import type { IOperationRunner } from './IOperationRunner';
import type { IOperationSettings } from '../../api/RushProjectConfiguration';
import { RushConstants } from '../RushConstants';
import * as crypto from 'crypto';
import type { IInputsSnapshot } from '../incremental/InputsSnapshot';
import type { BuildCacheConfiguration } from '../../api/BuildCacheConfiguration';

/**
 * Options for constructing a new Operation.
 * @alpha
 */
export interface IOperationOptions {
  /**
   * The Rush phase associated with this Operation, if any
   */
  phase?: IPhase | undefined;

  /**
   * The Rush project associated with this Operation, if any
   */
  project?: RushConfigurationProject | undefined;

  /**
   * When the scheduler is ready to process this `Operation`, the `runner` implements the actual work of
   * running the operation.
   */
  runner?: IOperationRunner | undefined;

  /**
   * Settings defined in the project configuration for this operation, can be overridden.
   */
  settings?: IOperationSettings | undefined;

  /**
   * {@inheritDoc Operation.logFilenameIdentifier}
   */
  logFilenameIdentifier: string;
}

/**
 * The `Operation` class is a node in the dependency graph of work that needs to be scheduled by the
 * `OperationExecutionManager`. Each `Operation` has a `runner` member of type `IOperationRunner`, whose
 * implementation manages the actual process of running a single operation.
 *
 * The graph of `Operation` instances will be cloned into a separate execution graph after processing.
 *
 * @alpha
 */
export class Operation {
  /**
   * The Rush phase associated with this Operation, if any
   */
  public readonly associatedPhase: IPhase | undefined;

  /**
   * The Rush project associated with this Operation, if any
   */
  public readonly associatedProject: RushConfigurationProject | undefined;

  /**
   * A set of all operations which depend on this operation.
   */
  public readonly consumers: ReadonlySet<Operation> = new Set<Operation>();

  /**
   * A set of all dependencies which must be executed before this operation is complete.
   */
  public readonly dependencies: ReadonlySet<Operation> = new Set<Operation>();

  /**
   * This property is used in the name of the filename for the logs generated by this
   * operation. This is a filesystem-safe version of the phase name. For example,
   * an operation for a phase with name `_phase:compile` has a `logFilenameIdentifier` of `_phase_compile`.
   */
  public logFilenameIdentifier: string;

  /**
   * When the scheduler is ready to process this `Operation`, the `runner` implements the actual work of
   * running the operation.
   */
  public runner: IOperationRunner | undefined = undefined;

  /**
   * The weight for this operation. This scalar is the contribution of this operation to the
   * `criticalPathLength` calculation above. Modify to indicate the following:
   * - `weight` === 1: indicates that this operation has an average duration
   * - `weight` &gt; 1: indicates that this operation takes longer than average and so the scheduler
   *     should try to favor starting it over other, shorter operations. An example might be an operation that
   *     bundles an entire application and runs whole-program optimization.
   * - `weight` &lt; 1: indicates that this operation takes less time than average and so the scheduler
   *     should favor other, longer operations over it. An example might be an operation to unpack a cached
   *     output, or an operation using NullOperationRunner, which might use a value of 0.
   */
  public weight: number = 1;

  /**
   * Get the operation settings for this operation, defaults to the values defined in
   *  the project configuration.
   */
  public settings: IOperationSettings | undefined = undefined;

  /**
   * If set to false, this operation will be skipped during evaluation (return OperationStatus.Skipped).
   * This is useful for plugins to alter the scope of the operation graph across executions,
   * e.g. to enable or disable unit test execution, or to include or exclude dependencies.
   */
  public enabled: boolean;

  private _stateHash: string | undefined;

  public constructor(options: IOperationOptions) {
    const { phase, project, runner, settings, logFilenameIdentifier } = options;
    this.associatedPhase = phase;
    this.associatedProject = project;
    this.runner = runner;
    this.settings = settings;
    this.logFilenameIdentifier = logFilenameIdentifier;
    this.enabled = true;
  }

  /**
   * The name of this operation, for logging.
   */
  public get name(): string | undefined {
    return this.runner?.name;
  }

  /**
   * If set to true, this operation is considered a no-op and can be considered always skipped for analysis purposes.
   */
  public get isNoOp(): boolean {
    return !!this.runner?.isNoOp;
  }

  /**
   * Adds the specified operation as a dependency and updates the consumer list.
   */
  public addDependency(dependency: Operation): void {
    // Cast internally to avoid adding the overhead of getters
    (this.dependencies as Set<Operation>).add(dependency);
    (dependency.consumers as Set<Operation>).add(this);
  }

  /**
   * Deletes the specified operation as a dependency and updates the consumer list.
   */
  public deleteDependency(dependency: Operation): void {
    // Cast internally to avoid adding the overhead of getters
    (this.dependencies as Set<Operation>).delete(dependency);
    (dependency.consumers as Set<Operation>).delete(this);
  }

  public get stateHash(): string {
    if (!this._stateHash) {
      throw new Error(
        'Operation state hash is not calculated yet, you must call `calculateStateHash` first.'
      );
    }
    return this._stateHash;
  }

  public calculateStateHash(options: {
    inputsSnapshot: IInputsSnapshot;
    buildCacheConfiguration: BuildCacheConfiguration;
  }): string {
    if (this._stateHash) {
      return this._stateHash;
    }
    const { inputsSnapshot, buildCacheConfiguration } = options;
    const { cacheHashSalt } = buildCacheConfiguration;
    // This redefinition is necessary due to limitations in TypeScript's control flow analysis, due to the nested closure.
    const definitelyDefinedInputsSnapshot: IInputsSnapshot = inputsSnapshot;

    // Build cache hashes are computed up front to ensure stability and to catch configuration errors early.
    function getOrCreateOperationHash(operation: Operation): string {
      if (operation._stateHash) {
        return operation._stateHash;
      }
      // Examples of data in the config hash:
      // - CLI parameters (ShellOperationRunner)
      const configHash: string | undefined = operation.runner?.getConfigHash();

      const { associatedProject, associatedPhase } = operation;
      // Examples of data in the local state hash:
      // - Environment variables specified in `dependsOnEnvVars`
      // - Git hashes of tracked files in the associated project
      // - Git hash of the shrinkwrap file for the project
      // - Git hashes of any files specified in `dependsOnAdditionalFiles` (must not be associated with a project)
      const localStateHash: string | undefined =
        associatedProject &&
        definitelyDefinedInputsSnapshot.getOperationOwnStateHash(associatedProject, associatedPhase?.name);

      // The final state hashes of operation dependencies are factored into the hash to ensure that any
      // state changes in dependencies will invalidate the cache.
      const dependencyHashes: string[] = Array.from(operation.dependencies, getDependencyHash).sort();

      const hasher: crypto.Hash = crypto.createHash('sha1');
      // This property is used to force cache bust when version changes, e.g. when fixing bugs in the content
      // of the build cache.
      hasher.update(`${RushConstants.buildCacheVersion}`);

      if (cacheHashSalt !== undefined) {
        // This allows repository owners to force a cache bust by changing the salt.
        // A common use case is to invalidate the cache when adding/removing/updating rush plugins that alter the build output.
        hasher.update(cacheHashSalt);
      }

      for (const dependencyHash of dependencyHashes) {
        hasher.update(dependencyHash);
      }

      if (localStateHash) {
        hasher.update(`${RushConstants.hashDelimiter}${localStateHash}`);
      }

      if (configHash) {
        hasher.update(`${RushConstants.hashDelimiter}${configHash}`);
      }

      const hash: string = hasher.digest('hex');
      operation._stateHash = hash;
      return hash;
    }

    function getDependencyHash(operation: Operation): string {
      return `${RushConstants.hashDelimiter}${operation.name}=${getOrCreateOperationHash(operation)}`;
    }

    return getOrCreateOperationHash(this);
  }
}
