import { useSession, signIn } from "next-auth/react"
import type { NextPage } from 'next'

const SignUp: NextPage = () => {
  const session = useSession()

  console.log(session)

  const signInWithGithub = (): void => {
    signIn("github", {
      redirect: true,
      redirect_uri: 'http://localhost:3000/signup'
    })
  }

  if (session.data) {
    return (
      <div>
        bro you logged in
      </div>
    )
  }

  return (
    <div>
      <h1>sign up</h1>
      <h2>this should show sign in with github</h2>
      <button type="button" onClick={signInWithGithub} title="Sign In With Github">
          Sign In With Github
      </button>
    </div>
  )
}

export default SignUp
