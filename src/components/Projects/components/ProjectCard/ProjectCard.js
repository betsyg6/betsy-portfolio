import React from 'react'
import { Project } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExternalLinkAlt,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons'
import { TECH, LINKS } from '../../copy'

const ProjectCard = ({ project }) => {
  const { image, title, description, website, github } = project
  return (
    <Project>
      <div className="project">
        <div className="project-header">
          <img src={image} />
        </div>
        <div className="project-body">
          <div className="project-body-content">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="project-footer">
              <div className="project-footer-tech">
                <span>{TECH}</span>
                {project.tech.map((type) => {
                  return <li key={type}>{type}</li>
                })}
              </div>
              <div className="project-footer-project-footer-links-container">
                <span>{LINKS}</span>
                <div className="project-footer-links-container">
                  <a href={website}>
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                  <a href={github}>
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
