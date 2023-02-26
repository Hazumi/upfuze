import type { NextPage, GetServerSidePropsContext } from 'next'
import { ProjectType } from 'upfuze'
import Project from '../../models/project'
import { OneProjectCard } from '../../components/OneProjectCard'
import { Button } from '../../components/Button'

type Props = {
  searchResults?: ProjectType[]
  term?: string
}

const ProjectSearchPage: NextPage<Props> = ({
  searchResults,
  term
}) => {

  return (
    <div>
      <h1>Search projects</h1>
      <form action="/projects/search" method="GET">
        <label htmlFor="term">
          <input
            type="text"
            name="term"
            required
            placeholder="Enter search term..."
            defaultValue={term}
          />
        </label>
        <Button fill type="submit">
          Search Projects
        </Button>
      </form>
      {searchResults && (
        <div>
          {
            searchResults.length === 0 && (<p>No projects found.</p>)
          }
          {
            searchResults.map((project) => <OneProjectCard key={project._id} project={project} />)
          }
        </div>
      )}
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { term } = context.query

  if (term) {
    const projectResults = await Project.find({
      $or: [
        {
          name: new RegExp(term.toString(), 'i')
        },
        {
          details: new RegExp(term.toString(), 'i')
        },
        {
          repository: new RegExp(term.toString(), 'i')
        },
      ]
    }).lean()

    console.log('search res:', projectResults.length)

    return {
      props: {
        searchResults: JSON.parse(JSON.stringify(projectResults)),
        term: term || ''
      }
    }
  }

  return {
    props: {}
  }
}

export default ProjectSearchPage
