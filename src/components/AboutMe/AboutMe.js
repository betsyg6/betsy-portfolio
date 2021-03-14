import React from 'react';
import { Wrapper } from '../../ui-components/Wrapper';
import { StyledSection, Row, Col } from './styles';
import { aboutMeText } from './copy';

const AboutMe = () => {
  return (
    <StyledSection id="about-me">
      <Wrapper>
        <h1>About Me</h1>
        <Row>
          <Col>
            <div>image placeholder</div>
          </Col>
          <Col>
            <p>{aboutMeText}</p>
          </Col>
        </Row>
      </Wrapper>
    </StyledSection>
  );
};

export default AboutMe;
