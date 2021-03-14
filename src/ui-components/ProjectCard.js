import React from 'react';
import { ProjectStyled } from './styles';

const ProjectCard = ({ project }) => {
  return (
    <ProjectStyled>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </ProjectStyled>
  );
};

export default ProjectCard;
