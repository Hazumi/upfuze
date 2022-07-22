import { useSession, signIn } from "next-auth/react"
import type { NextPage } from 'next'
import Image from 'next/image'

const Dashboard: NextPage = () => {
  const session = useSession()

  console.log({ session })

  if (!session.data?.user || session.status !== 'authenticated') {
    return <h1>Not logged in</h1>
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome {session.data.user.name}</h2>
      <img src={session.data.user?.image || ''} alt="Profile Picture" />
      <h2>you are logged in</h2>
    </div>
  )
}

export default Dashboard
