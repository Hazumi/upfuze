import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized: (params) => {
      return !!params.token
    },
  },
})

export const config = {
  matcher: ['/projects/create', '/dashboard']
}
