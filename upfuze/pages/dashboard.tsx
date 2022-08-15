import { unstable_getServerSession } from "next-auth/next"
import type { ProjectType } from "upfuze"
import { useSession } from "next-auth/react"
import type { NextPage, GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import { Button } from '../components/Button'
import { connectToDatabase } from '../lib/connectToDatabase'
import Project from '../models/project'
import { OneProjectCard } from '../components/OneProjectCard'
import { authOptions } from './api/auth/[...nextauth]'

const Dashboard: NextPage<{ allProjects: ProjectType[] }> = ({ allProjects }) => {
  const session = useSession()

  console.log({ session })

  if (!session.data?.user || session.status !== 'authenticated') {
    return <h1>Not logged in</h1>
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Your Projects</h2>
      <Link href="/projects/create" passHref>
        <Button fill>
          Create Project +
        </Button>
      </Link>
      <div className="projects-container">
        {
          allProjects.map((project) => <OneProjectCard key={project._id} project={project} />)
        }
        {
          allProjects.length === 0 && (
            <p>You do not have any projects. Try adding one now!</p>
          )
        }
      </div>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  await connectToDatabase()

  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  )

  if (!session?.user?.id) {
    return {
      redirect: '/signup'
    }
  }

  const allProjects = await Project.find({
    owner: session.user.id
  })

  return {
    props: {
      allProjects: JSON.parse(JSON.stringify(allProjects))
    },
  }
}

export default Dashboard
