/// <reference types="node" />

import File = require('vinyl')

// tslint:disable-next-line no-any
declare function tap(lambda: (file: File, t: any) => void): NodeJS.ReadWriteStream

export = tap
