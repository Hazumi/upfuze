import NextAuth, { NextAuthOptions } from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import GithubProvider from "next-auth/providers/github"
import { connectToDatabase } from '../../../lib/connectToDatabase'
import Profile from '../../../models/profile'

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter((async () => {
      const connection = await connectToDatabase()
      return connection.connection.getClient()
  })()),

  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
      authorization: {
        params: {
          redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/github`,
        }
      }
    })
  ],

  callbacks: {
    session: async ({ session, user }) => {
      session.user = user

      const profileExists = await Profile.exists({
        userId: user.id
      })


      console.log('user: ', user)
      if (!profileExists) {
        await Profile.create({
          userId: user.id,
          name: user.name,
          avatar: user.image
        })
      }

      session.profile = await Profile.findOne({
        userId: user.id
      }).lean()

      return session
    }
  }
}

export default NextAuth(authOptions)
