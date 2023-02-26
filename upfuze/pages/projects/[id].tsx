import { ProjectType } from 'upfuze'
import Image from 'next/image'
import Link from 'next/link'
import type { NextPage, GetStaticPropsContext } from 'next'
import { connectToDatabase } from '../../lib/connectToDatabase'
import Project from '../../models/project'

type Props = {
  project: ProjectType
}

const ViewOneProjectPage: NextPage<Props> = ({ project }) => {
    if (!project) {
      return null
    }

    return (
      <div className="project-page">
        <div className="cover-image-container">
          <Image
            src={project.coverImage || "/images/project-placeholder.jpg"}
            alt={`${project.name} Cover Image`}
            objectFit="fill"
            width={300}
            height={100}
          />
        </div>
        <h3>{ project.name }</h3>
        <h4>{ project.timeframe ? `${project.timeframe} months` : 'No timeframe.'}</h4>
        <h4>{ project.type }</h4>
        { project.repository && (
          <Link href={project.repository} passHref>
            <a>View Repository</a>
          </Link>
        )}
        <p>
          { project.details }
        </p>
      </div>
    )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  await connectToDatabase()

  if (context.params) {
    const { id: projectId } = context.params
    console.log({ projectId })
    const project = await Project.findOne({ _id: projectId })

    return {
      props: {
        project: JSON.parse(JSON.stringify(project))
      }
    }
  }

  return {
    redirect: '/404'
  }
}

export async function getStaticPaths() {
  await connectToDatabase()

  const projects = await Project.find({}, { _id: 1 }).lean()

  return {
    paths: projects.map((project) => `/projects/${project._id}`),
    fallback: true
  }
}

export default ViewOneProjectPage
