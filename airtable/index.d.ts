/* tslint:disable no-any */

declare namespace Airtable {
  interface Options {
    apiKey: string
    endpointUrl: string
    apiVersion: string
    allowUnauthorizedSsl: boolean
    noRetryIfRateLimited: boolean
  }

  interface FieldSet {
    [key: string]: undefined | string | ReadonlyArray<Attachment>
  }

  // type Base<T extends FieldSet> = (tableName: string) => Table<T>

  interface Base {
    <T extends FieldSet> (tableName: string): Table<T>
  }

  interface Table<TFields extends FieldSet> {
    select(opt?: SelectOptions): Query<TFields>
    find(id: string): Promise<Response<TFields>>
    create(record: Partial<TFields>): Promise<Response<TFields>>
    update(id: string, record: Partial<TFields>): Promise<Response<TFields>>
    replace(id: string, record: Partial<TFields>): Promise<Response<TFields>>
    destroy(id: string): Promise<{ id: string}>
  }

  interface SelectOptions {
    view?: string
    maxRecords?: number
  }

  interface Query<TFields extends object> {
    all(): Promise<Response<TFields>>
    firstPage(): Promise<Response<TFields>>
    eachPage(cb: (records: Response<TFields>, fetchNextPage: () => void) => void, done: (err: unknown) => void): void
  }

  type Response<TFields> = ReadonlyArray<Row<TFields>>

  interface Row<TFields> {
    id: string
    fields: TFields
  }

  interface Attachment {
    id: string
    url: string
    filename: string
    size: number
    type: string
    thumbnails?: {
      small: Thumbnail
      large: Thumbnail
      full: Thumbnail
    }
  }

  interface Thumbnail {
    url: string
    width: number
    height: number
  }

  interface Table<TFields extends FieldSet> {
    select(opt?: SelectOptions): Query<TFields>
  }

  function configure(options: Partial<Airtable.Options>): void

  function base(talbeName: string): Base
}

export = Airtable
