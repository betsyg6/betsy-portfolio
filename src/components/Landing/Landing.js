import React from 'react';
import { Wrapper } from '../../ui-components/Wrapper';
import Typical from 'react-typical';
import { StyledSection } from './styles';
import ContactMe from '../ContactMe/ContactMe';

const Landing = () => {
  return (
    <Wrapper>
      <StyledSection>
        <h1>Betsy Groton</h1> <ContactMe />
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
      </StyledSection>
    </Wrapper>
  );
};

export default Landing;
