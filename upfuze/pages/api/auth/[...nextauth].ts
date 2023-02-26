import NextAuth, { NextAuthOptions, User } from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import GithubProvider from "next-auth/providers/github"
import { connectToDatabase } from '../../../lib/connectToDatabase'

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
    session: ({ session, user, token }) => {
      // console.log('in session callback', {
      //   session,
      //   user,
      //   token
      // })

      session.user = user

      return session
    }
  }
}

export default NextAuth(authOptions)
