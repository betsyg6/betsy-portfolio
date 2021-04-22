import React from 'react';
import { StyledSection, StyledContents } from './styles';
import { projects } from './copy';
import { ProjectCard, Wrapper } from '../../ui-components';


const Projects = () => {


  return (
    <StyledSection id="projects">
      <Wrapper>
        <h1>Projects</h1>
        <StyledContents>
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={projects.indexOf(project)}
                  project={project}
                />
              );
            })}
        </StyledContents>
      </Wrapper>
    </StyledSection>
  );
};

export default Projects;
