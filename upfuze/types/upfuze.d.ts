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

  interface RoleType {
    _id: string
    name: string
    description: string
    projectId: string
    filledUserRole?: ProfileType
    createdAt: Date
  }

  interface ProfileType {
    userId: string
    name: string
    avatar?: string | undefined
  }
}
