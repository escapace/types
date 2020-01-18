type DType = "int8" | "int16" | "int32" | "uint8" | "uint16" | "uint32" | "float32" | "float64" | "array" | "uint8_clamped"

interface Options<T extends DType = "uint16"> {
  clockwise: boolean
  type: T
  count: number
  start: number
}

type DTypeType<T extends DType> = {
  "int8": Int8Array
  "int16": Int16Array
  "int32": Int32Array
  "uint8": Uint8Array
  "uint16": Uint16Array
  "uint32": Uint32Array
  "float32": Float32Array
  "float64": Float64Array
  "array": Array
  "uint8_clamped": Uint8ClampedArray
}[T]

declare function createIndices<T extends DType = "uint16">(options?: Partial<Options<T>>): DTypeType<T>
declare function createIndices<T extends DType = "uint16">(array?: Uint16Array, options?: Partial<Options<T>>): DTypeType<T>

export = createIndices
