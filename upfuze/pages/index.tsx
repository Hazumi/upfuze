import type { NextPage, GetStaticPropsResult } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ProjectType } from 'upfuze'
import Project from '../models/project'
import { OneProjectCard } from '../components/OneProjectCard'
import { connectToDatabase } from '../lib/connectToDatabase'
import { HomeSearchSection } from '../components/Home/SearchSection'
import { HomeSolutionsSection } from '../components/Home/SolutionsSection'

import styles from '../styles/Home.module.css'

type Props = {
  latestProjects: ProjectType[]
}

const Home: NextPage<Props> = (props: Props) => {
  const { latestProjects } = props

  return (
    <>
      <Head>
        <title>upfuze.io</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content="Bring ideas to life with other designers, developers, and tech enthusiasts by connecting, collaborating, and growing together."/>
        <meta name="keywords" content="open source, upfuze, up fuze, github, projects, project, collaborate, team, members, code, coding, tech"/>
        <meta property="og:site_name" content="upfuze.io" />
        { /* <meta name="twitter:domain" property="twitter:domain" content="tyhacz.com"/> */ }
        <meta name="og:title" property="og:title" content="upfuze.io"/>
        <meta name="twitter:title" property="twitter:title" content="upfuze.io"/>
        <meta property="og:description" content="Bring ideas to life with other designers, developers, and tech enthusiasts by connecting, collaborating, and growing together."/>
        <meta name="twitter:description" property="twitter:description" content="Bring ideas to life with other designers, developers, and tech enthusiasts by connecting, collaborating, and growing together." />
        { /* <meta property="og:image" content="https://www.tyhacz.com/images/tw-fb-li-card.png"/> */ }
        { /* <meta property="twitter:card" content="https://www.tyhacz.com/images/tw-fb-li-card.png"/> */ }
        { /* <meta name="twitter:image:src" property="twitter:image:src" content="https://www.tyhacz.com/images/tw-fb-li-card.png"/> */ }
        { /* <meta name="twitter:image" property="twitter:image" content="https://www.tyhacz.com/images/tw-fb-li-card.png"/> */ }
        <meta name="og:image:alt" property="og:image:alt" content="upfuze.io" />
        { /* <meta property="og:url" content="https://www.tyhacz.com" /> */ }
        <meta property="og:type" content="website"/>
      </Head>
      <div className={styles.container}>
          <h1>
            Upfuze is a project collaboration based tech hub.
          </h1>
          <h2>
            Bring ideas to life with other designers, 
            developers, and tech enthusiasts by &nbsp;
            <span className="bold">connecting</span>,&nbsp; 
            <span className="bold">collaborating</span>,&nbsp;
            and <span className="bold">growing together</span>.
          </h2>
          <Link href="/signup" passHref>
            <a title="Get Started">
              <button type="button" className={styles.cta}>Get Started</button>
            </a>
          </Link>
          <HomeSearchSection />
          <HomeSolutionsSection />
          <h2>Newest Projects</h2>
          {
            latestProjects.map(
              (project) => <OneProjectCard key={project._id} project={project} />
            )
          }
      </div>
    </>
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
