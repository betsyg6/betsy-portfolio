import React from 'react'
import Wrapper from '../../ui-components/Wrapper'
import { techStack } from './copy'
import { Row, Column } from './styles'

const TechStack = () => {
  return (
    <div id="tech-stack">
      <Wrapper className="third">
        <Row>
          {techStack.map((tech) => {
            return (
              <Column key={techStack.indexOf(tech)}>
                <h2>{tech.title}</h2>
                <ul>
                  {tech.stack.map((type) => {
                    return <li key={type.indexOf(tech.stack)}>{type} </li>
                  })}
                </ul>
              </Column>
            )
          })}
        </Row>
      </Wrapper>
    </div>
  )
}

export default TechStack
