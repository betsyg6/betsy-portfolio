import React from 'react'
import { Project } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExternalLinkAlt,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons'

const ProjectCard = ({ project }) => {
  return (
    <Project>
      <div className="project">
        <div className="project-header">
          <img src={project.image} />
        </div>
        <div className="project-body">
          <div className="project-body-content">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-footer">
              <div className="project-footer-tech">
                <span>Tech</span>
                {project.tech.map((type) => {
                  return <li key={type}>{type}</li>
                })}
              </div>
              <div className="project-footer-project-footer-links-container">
                <span>Take a look!</span>
                <div className="project-footer-links-container">
                  <a href={project.website}>
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                  <a href={project.github}>
                    <FontAwesomeIcon icon={faCodeBranch} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Project>
  )
}

export default ProjectCard

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
