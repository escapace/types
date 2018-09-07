/* tslint:disable no-any */

declare namespace Airtable {
  interface Options {
    apiKey: string
    endpointUrl: string
    apiVersion: string
    allowUnauthorizedSsl: boolean
    noRetryIfRateLimited: boolean
  }

  function configure (options: Partial<Airtable.Options>): void

  function base (id: string): any
}

export = Airtable
