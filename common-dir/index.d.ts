declare namespace CommonDir {
  type CommonDir = (files: string[]) => string
}

declare var commonDir: CommonDir.CommonDir

export = commonDir
