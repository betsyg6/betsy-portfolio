import React from 'react';
import { ProjectStyled } from './styles';

const ProjectCard = ({ project }) => {
  return (
    <ProjectStyled>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <ul>
        {project.tech.map((tech) => {
          return <li key={tech}>{tech}</li>;
        })}
      </ul>
      <a href={project.website}>Site</a>
      <a href={project.github}>Github</a>
    </ProjectStyled>
  );
};

export default ProjectCard;
