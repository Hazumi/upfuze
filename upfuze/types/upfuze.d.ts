declare module "upfuze" {
  interface ProjectType {
    _id: string
    name: string
    details: string
    repository?: string
    timeframe: number
    type: 'open-source' | 'commercial'
    coverImage?: string
    owner: string
  }
}
