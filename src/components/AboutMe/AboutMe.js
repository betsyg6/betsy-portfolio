import React from 'react'
import Wrapper from '../../ui-components/Wrapper'
import { Section, Row, Column, TextWrapper } from './styles'
import {
  aboutMe_teaching,
  aboutMe_codingBootcamp,
  aboutMe_engineering,
} from './copy'
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
              <p>{aboutMe_teaching}</p>
            </Column>
            <Column>
              <p>{aboutMe_codingBootcamp}</p>
            </Column>
            <Column>
              <p>{aboutMe_engineering}</p>
            </Column>
          </TextWrapper>
        </Row>
      </Wrapper>
    </Section>
  )
}

export default AboutMe
