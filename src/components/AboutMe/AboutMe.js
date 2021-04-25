import React from 'react'
import Wrapper from '../../ui-components/Wrapper'
import { Section, Row, Column, TextWrapper } from './styles'
import { aboutMeText1, aboutMeText2 } from './copy'
import betsy from '../../../images/betsy.jpg'

const AboutMe = () => {
  return (
    <Section id="about-me">
      <Wrapper className="full">
        <h1 className="dark-header">About Me</h1>
        <Row>
          <Column>
            <img src={betsy} />
          </Column>
        </Row>
        <Row>
          <TextWrapper>
            <Column>
              <p>{aboutMeText1}</p>
            </Column>
            <Column>
              <p>{aboutMeText2}</p>
            </Column>
          </TextWrapper>
        </Row>
      </Wrapper>
    </Section>
  )
}

export default AboutMe
