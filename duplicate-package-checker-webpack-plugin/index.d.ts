import webpack = require('webpack')

declare namespace DuplicatePackageCheckerPlugin {
  interface PluginOptions {
    verbose: boolean
    emitError: boolean
    showHelp: boolean
    strict: boolean
    exclude (instance: { name: string, version: string, path: string, issuer: string }): boolean
    // exclude: any
  }
}

declare class DuplicatePackageCheckerPlugin extends webpack.Plugin {
  constructor(options: Partial<DuplicatePackageCheckerPlugin.PluginOptions>)
}

export = DuplicatePackageCheckerPlugin
