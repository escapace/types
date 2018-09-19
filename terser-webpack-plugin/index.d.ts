/* tslint:disable no-any */

import { Condition, Plugin } from 'webpack'

declare class TerserPlugin extends Plugin {
  constructor(options?: TerserPlugin.Options)
}

export = TerserPlugin

declare namespace TerserPlugin {
  export interface MinifyOptions {
    ecma?: any,
    module?: any,
    parse?: Object
    compress?: Object
    mangle?: Object
    output?: Object | null
    sourceMap?: Object
    ecma?: number // specify one of?: 5, 6, 7 or 8
    ie8?: boolean
    keep_classnames?: boolean
    keep_fnames?: boolean
    nameCache?: any // or specify a name cache object
    safari10?: boolean
    toplevel?: boolean
    warnings?: boolean
  }

  export interface Options {
    /** Parallelization can speedup your build significantly and is therefore highly recommended. */
    test?: Condition | Condition[]
    include?: Condition | Condition[]
    exclude?: Condition | Condition[]
    cache?: boolean | string
    parallel?: boolean | string
    sourceMap?: boolean
    terserOptions?: MinifyOptions
    extractComments?: any
    warningsFilter?: any
  }
}
