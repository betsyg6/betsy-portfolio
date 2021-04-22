import React from 'react';
import { ProjectStyled } from './styles';

const ProjectCard = ({ project }) => {
  return (
    <ProjectStyled>
      <div className='post'>
        <div className='header_post'>
          <img src={project.image} />
        </div>
        <div className='body_post'>
          <div className='post_content'>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className='container_infos'>
              <div className='postedBy'>
                <span>Tech</span>
                React
              </div>
              <div className='container_tags'>
                <span>Links</span>
                placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectStyled>
  );
};

export default ProjectCard;


// <h2>{project.title}</h2>
//       <img src={project.image} alt={project.title} />
//       <p>{project.description}</p>
//       <ul>
//         {project.tech.map((tech) => {
//           return <li key={tech}>{tech}</li>;
//         })}
//       </ul>
//       <a href={project.website}>Site</a>
//       <a href={project.github}>Github</a>