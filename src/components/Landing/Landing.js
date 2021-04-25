import React from 'react'
import Wrapper from '../../ui-components/Wrapper'
import Typical from 'react-typical'
import { Section, TextWrapper } from './styles'
import ContactMe from '../ContactMe/ContactMe'

const Landing = () => {
  return (
    <Wrapper>
      <Section>
        <TextWrapper>
          <h1>Betsy Groton</h1>
          <ContactMe />
          <Typical
            steps={[
              "Hi, I'm Betsy",
              1000,
              'Teacher turned full stack software engineer',
              1000,
              "Nobody calls me 'Elizabeth'",
              1000,
            ]}
            loop={Infinity}
            wrapper="h2"
          />
        </TextWrapper>
      </Section>
    </Wrapper>
  )
}

export default Landing
