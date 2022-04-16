import type { NextPage } from 'next'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <h1>upfuze</h1>
        <h2>coming soon</h2>
        <Link href="/signup" passHref>
            <button type="button">
                Sign In
            </button>
        </Link>
    </div>
  )
}

export default Home
