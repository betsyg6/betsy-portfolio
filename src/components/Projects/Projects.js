import React from 'react'
import { Section, Contents } from './styles'
import { projects } from './copy'
import Wrapper from '../../ui-components/Wrapper'
import ProjectCard from './components/ProjectCard'

const Projects = () => {
  return (
    <Section id="projects">
      <Wrapper className="full">
        <h1 className="light-header">Projects</h1>
        <Contents>
          {projects.map((project) => {
            return (
              <ProjectCard key={projects.indexOf(project)} project={project} />
            )
          })}
        </Contents>
      </Wrapper>
    </Section>
  )
}

export default Projects
