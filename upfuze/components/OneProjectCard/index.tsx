import React from 'react'
import type { ProjectType } from 'upfuze'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../Button'

type Props = {
  project: ProjectType
}

export const OneProjectCard: React.FC<Props> = ({ project }) => {
    return (
      <div className="project-card">
        <div className="cover-image-container">
          <Image
            src={project.coverImage ? `/${project.coverImage}` : "/images/project-placeholder.jpg"}
            alt={`${project.name} Cover Image`}
            layout="fill"
          />
        </div>
        <h3>{ project.name }</h3>
        <h4>{ project.timeframe ? `${project.timeframe} months` : 'No timeframe.'}</h4>
        <h4>{ project.type }</h4>
        <p>
          { project.details }
        </p>
        <Link href={`/projects/${project._id}`} passHref>
          <a>
            <Button fill>
              View
            </Button>
          </a>
        </Link>
      </div>
    )
}

