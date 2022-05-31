import React from 'react'
import Wrapper from '../../ui-components/Wrapper'
import Typical from 'react-typical'
import { Section } from './styles'
import ContactMe from '../ContactMe/ContactMe'
import { betsyGroton, tagLines } from './copy'

const Landing = () => {
  return (
    <Wrapper className="third">
      <Section>
        <h1 className="name">{betsyGroton}</h1>
        <Typical steps={tagLines} loop={Infinity} wrapper="h2" />
        <ContactMe />
      </Section>
    </Wrapper>
  )
}

export default Landing
