import React from 'react'
import { Link } from 'react-scroll'
import { NavBar } from './styles'

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
          About Me
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="articles"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Articles
        </Link>
      </div>
    </NavBar>
  )
}

export default Navigation
