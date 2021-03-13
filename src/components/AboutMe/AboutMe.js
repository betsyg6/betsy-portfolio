import React from 'react';
import Wrapper from '../../ui-components/Wrapper';
import { StyledSection } from './styles';
import { aboutMeText } from './copy';

const AboutMe = () => {
  return (
    <StyledSection id="about-me">
      <Wrapper>
        <h1>About Me</h1>
        <p>{aboutMeText}</p>
      </Wrapper>
    </StyledSection>
  );
};

export default AboutMe;
