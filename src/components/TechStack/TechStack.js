import React from 'react'
import Wrapper from '../../ui-components/Wrapper'
import { techStack } from './copy'
import { Row, Column } from './styles'

const TechStack = () => {
  return (
    <div id="tech-stack">
      <Wrapper>
        <h1>Tech Stack</h1>
        <Row>
          {techStack.map((tech) => {
            return (
              <Column key={techStack.indexOf(tech)}>
                <div className="card-container">
                  <div className="card">
                    <a>
                      <div className="card-display">
                        <h2>{tech.title}</h2>
                      </div>
                      <div className="card-hover">
                        <h2>{tech.title}</h2>
                        <ul>
                          {tech.stack.map((type) => {
                            return (
                              <li key={type.indexOf(tech.stack)}>{type} </li>
                            )
                          })}
                        </ul>
                      </div>
                    </a>
                    <div className="card-border" />
                  </div>
                </div>
              </Column>
            )
          })}
        </Row>
      </Wrapper>
    </div>
  )
}

export default TechStack
