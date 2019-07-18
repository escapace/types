declare function convertLength(
  value: number,
  fromUnit: string,
  toUnit: string,
  options?: { pixelsPerInch? : number, precision?: number, roundPixel?: boolean }
): number

export = convertLength

