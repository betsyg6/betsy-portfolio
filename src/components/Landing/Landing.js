import React from 'react'
import Wrapper from '../../ui-components/Wrapper'
import Typical from 'react-typical'
import { Section } from './styles'
import ContactMe from '../ContactMe/ContactMe'

const Landing = () => {
  return (
    <Wrapper className="third">
      <Section>
        <h1 className="name">Betsy Groton</h1>

        <Typical
          steps={[
            "Hi, I'm Betsy",
            1000,
            'Teacher turned full stack software engineer',
            1000,
            "Nobody calls me 'Elizabeth'",
            1000,
            'Rock climber, runner, dog mom, TSwift enthusiast',
            1000,
          ]}
          loop={Infinity}
          wrapper="h2"
        />
        <ContactMe />
      </Section>
    </Wrapper>
  )
}

export default Landing
