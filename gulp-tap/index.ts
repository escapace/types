/// <reference types="node" />

import File = require('vinyl')

declare function tap(lambda: (file: File, t: any) => void): NodeJS.ReadWriteStream

export = tap
