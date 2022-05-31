import React from 'react'
import { Contents } from './styles'
import { projects, PROJECTS } from './copy'
import Wrapper from '../../ui-components/Wrapper'
import ProjectCard from './components/ProjectCard'

const Projects = () => {
  return (
    <div id="projects">
      <Wrapper className="full">
        <h1>{PROJECTS}</h1>
        <Contents>
          {projects.map((project) => {
            return (
              <ProjectCard key={projects.indexOf(project)} project={project} />
            )
          })}
        </Contents>
      </Wrapper>
    </div>
  )
}

export default Projects
