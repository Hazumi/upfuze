import { useSession, signIn } from "next-auth/react"
import Image from 'next/image'
import type { NextPage } from 'next'
import styles from './continue.module.css'
import Graphic from '../../assets/images/sign-up-graphic.png'
import { Button } from '../../components/Button'

const SignUp: NextPage = () => {
  const session = useSession()

  console.log({ session })

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
    <div className={styles.container}>
      <div className={styles.graphicContainer}>
        <Image src={Graphic} width={448} height={615} objectFit="contain" alt="Upfuze Graphic" />
      </div>
      <form>
        <h1>Get Started</h1>
        <Button type="button" onClick={signInWithGithub} title="Sign In With Github">
          Sign In With Github
        </Button>
      </form>
    </div>
  )
}

export default SignUp
