import React from 'react'
import Link from 'next/link'

type Props = {
}

export const HomeSearchSection: React.FC<Props> = ({ }) => {
    return (
      <form className="home-search-section" method="GET" action="/projects/search">
        <div className="btn-group">
          <button type="button">
            Find a Project
          </button>
          <button type="button">
            Create a Project
          </button>
        </div>
        <input type="text" name="term" required placeholder="Search projects..." />
      </form>
    )
}

