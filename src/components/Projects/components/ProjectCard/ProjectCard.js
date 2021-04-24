import React from 'react';
import { Project } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ project }) => {
  return (
    <Project>
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
                {project.tech.map((type) => {
                  return <li key={type}>{type}</li>
                })}
              </div>
              <div className='container_tags'>
                <span>Take a look!</span>
                <div className='links'><a href={project.website}>
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
                <a href={project.github}>
                  <FontAwesomeIcon icon={faCodeBranch} />
                </a></div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Project>
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