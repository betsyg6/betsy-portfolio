import React from 'react'
import { Link } from 'react-scroll'
import { NavBar } from './styles'
import { ABOUT_ME, PROJECTS, ARTICLES } from './copy'

const Navigation = () => {
  return (
    <NavBar>
      <div className="header">
        <Link
          activeClass="active"
          to="about-me"
          spy={true}
          smooth={true}
          duration={1000}
        >
          {ABOUT_ME}
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={1000}
        >
          {PROJECTS}
        </Link>
        <Link
          activeClass="active"
          to="articles"
          spy={true}
          smooth={true}
          duration={1000}
        >
          {ARTICLES}
        </Link>
      </div>
    </NavBar>
  )
}

export default Navigation
