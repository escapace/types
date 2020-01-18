type Font = {}

declare function loadBMFont(
  url: string,
  callback: (err: unknown, font: Font) => void
): void

export = loadBMFont
