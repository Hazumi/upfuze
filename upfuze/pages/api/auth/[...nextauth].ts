import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
      authorization: {
        params: {
          redirect_uri: 'http://localhost:3000/signup',
        }
      }
    })
  ],
  callbacks: {
    async signIn (params) {
      return true
    },
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  }
})
