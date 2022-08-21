import { useSession, signIn } from "next-auth/react"
import type { NextPage } from 'next'

const SignUp: NextPage = () => {
  const session = useSession()

  console.log(session)

  const signInWithGithub = (): void => {
    signIn("github", {
      callbackUrl: `${window.location.origin}/dashboard`
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
      <h1>Get Started</h1>
      <button type="button" onClick={signInWithGithub} title="Sign In With Github">
          Sign In With Github
      </button>
    </div>
  )
}

export default SignUp
