import { lazy } from 'react';

interface DefaultModule {
  default: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ModuleEntries = any;

type Module = DefaultModule | ModuleEntries;

export const lazyLibrary = (
  promisedLibraryImport: () => Promise<Module>,
  compPathString?: string
) =>
  lazy(() =>
    promisedLibraryImport().then((module) => {
      if (compPathString) {
        const compPathParts = compPathString.split('.');

        const moduleDefault = compPathParts.reduce(
          (accumulator, currentValue: string) =>
            accumulator ? accumulator[currentValue] : null,
          module
        );

        return {
          default: moduleDefault,
        };
      }
      return module;
    })
  );
