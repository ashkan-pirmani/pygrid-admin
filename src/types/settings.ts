export interface PyGridSettings {
  nodeName: string
  awsCredentials: string
  gcpCredentials: string
  azureCredentials: string
  cacheStrategy: string
  replicateDb: boolean
  autoScale: boolean
  tensorExpirationPolicy: number
  allowUserSignup: boolean
}
