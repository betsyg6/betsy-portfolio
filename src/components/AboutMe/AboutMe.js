import React from 'react';
import { Wrapper } from '../../ui-components/Wrapper';
import { StyledSection, Row, Col } from './styles';
import { aboutMeText1, aboutMeText2 } from './copy';
import betsy from '../../../images/betsy.jpg';

const AboutMe = () => {
  return (
    <StyledSection id="about-me">
      <Wrapper>
        <h1>About Me</h1>
        <Row>
          <Col>
            <img src={betsy} />
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{aboutMeText1}</p>
          </Col>
          <Col>
            <p>{aboutMeText2}</p>
          </Col>
        </Row>
      </Wrapper>
    </StyledSection>
  );
};

export default AboutMe;
