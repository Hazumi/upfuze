import type { NextPage, GetStaticPropsResult } from 'next'
import { ProjectType } from 'upfuze'
import Project from '../models/project'
import { OneProjectCard } from '../components/OneProjectCard'
import { connectToDatabase } from '../lib/connectToDatabase'

import styles from '../styles/Home.module.css'

type Props = {
  latestProjects: ProjectType[]
}

const Home: NextPage<Props> = (props: Props) => {
  const { latestProjects } = props

  return (
    <div className={styles.container}>
        <h1>upfuze</h1>
        <h2>coming soon</h2>
        <hr />
        <h2>Newest Projects</h2>
        {
          latestProjects.map(
            (project) => <OneProjectCard key={project._id} project={project} />
          )
        }
    </div>
  )
}

export const getStaticProps = async (): Promise<GetStaticPropsResult<Props>> => {
  await connectToDatabase()
  const latestProjects = await Project.find({}).sort({ createdAt: -1 }).limit(3).lean()

  return {
    props: {
      latestProjects: JSON.parse(JSON.stringify(latestProjects))
    }
  }
}

export default Home
