declare namespace PkgUp {
  interface Options {
    cwd: string
  }

  interface PkgUp {
    (options?: Options): Promise<string | null>
    sync: (options?: Options) => string | null
  }
}

declare var pkgUp: PkgUp.PkgUp

export = pkgUp
