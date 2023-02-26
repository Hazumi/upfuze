import type { NextPage, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from '../api/auth/[...nextauth]'
import { Button } from '../../components/Button'

const CreateProject: NextPage = () => {
  return (
    <div>
      <h1>Create Project</h1>

      <form method="POST" action="/api/projects/create">
        <label htmlFor="name">
          Project name*
          <input required name="name" type="text" placeholder="Enter project name..." />
        </label>

        <label htmlFor="repository">
          Link to repository
          <input name="repository" type="url" placeholder="Enter project name..." />
        </label>

        <label htmlFor="details">
          Details
          <textarea required name="details" rows={4} placeholder="Enter project details here..." />
        </label>

        <label htmlFor="timeframe">
          Timeframe
          <select name="timeframe">
            <option value="" selected disabled placeholder="Select timeframe">Select Timeframe</option>
            <option value="0">No timeframe</option>
            <option value="1">1 Month</option>
            <option value="2">2 Months</option>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
            <option value="12">1 Year</option>
            <option value="24">2 Years</option>
          </select> </label>
        <label htmlFor="type">
          Project Type*
          <select required name="type">
            <option value="" selected disabled placeholder="Select Type of Project">Select Type of Project</option>
            <option value="open-source">Open Source</option>
            <option value="commercial">Commercial / Private</option>
          </select>
        </label>

        <label htmlFor="coverImage">
          Cover Image
          <input type="file" name="coverImage" />
        </label>

        <Button fill type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<{}>> {
  const session = await unstable_getServerSession(context.req, context.res, authOptions)

  if (!session || !session?.user) {
    return {
      redirect: {
        permanent: false,
        destination: '/signup'
      }
    }
  }

  return {
    props: {}
  }
}

export default CreateProject
