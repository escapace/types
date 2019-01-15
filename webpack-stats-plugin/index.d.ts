/* tslint:disable no-any */

import { Compiler, Condition, Plugin, Stats } from 'webpack'

export interface Options {
  filename: string
  fields?: string[] | null
  transform?: (
    data: Stats,
    opts: { compiler: Compiler }
  ) => Prommise<string> | string
}

export declare class StatsWriterPlugin extends Plugin {
  constructor(options: Options)
}
