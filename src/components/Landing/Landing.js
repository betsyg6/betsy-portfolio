import React from 'react';
import { Wrapper } from '../../ui-components/Wrapper';
import Typical from 'react-typical';
import { StyledList, StyledSection } from './styles';
import { contact } from '../Footer/copy';

const Landing = () => {
  return (
    <Wrapper>
      <StyledSection>
        <h1>Betsy Groton</h1>{' '}
        <StyledList>
          {contact.map((info) => {
            return (
              <a href={info.link} key={info.link}>
                {info.name}
              </a>
            );
          })}
        </StyledList>
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
