import React from 'react'
import styles from '../../styles/HomeSolutionsSection.module.css'
import Image from 'next/image'

type Props = {
}

export const HomeSolutionsSection: React.FC<Props> = ({ }) => {
    return (
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>Better Together</h3>
          <Image src="/building-together.png" alt="Building Together" width={64} height={64} />
          <p>
            Individuals of all skill levels can work together to refine their skillsets and create projects greater than what we could accomplish by working alone.
          </p>
        </div>

        <div className={styles.column}>
          <h3>How It Works</h3>
          <Image src="/how-it-works.png" alt="How It Works" width={64} height={64} />
          <p>Search for open roles on an existing project or create a new listing to have others help bring your project to life.</p>
        </div>

        <div className={styles.column}>
          <h3>Why Upfuze?</h3>
          <Image src="/why-upfuze.png" alt="Why Upfuze?" width={64} height={64} />
          <p>We are a community of tech enthusiasts ranging from graphic designers, project managers, web developers, and everything in between.</p>
        </div>
      </div>
    )
}

