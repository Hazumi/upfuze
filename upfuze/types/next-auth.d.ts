import NextAuth from "next-auth"
import { ProfileType } from "upfuze"

declare module "next-auth" {
  interface User extends NextAuth.User {
      id: string
      image: string
  }
  interface Session extends NextAuth.Session {
    user: User
    profile: ProfileType
  }
}
