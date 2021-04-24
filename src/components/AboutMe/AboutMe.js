import React from 'react';
import Wrapper from '../../ui-components/Wrapper';
import { Section, Row, Column } from './styles';
import { aboutMeText1, aboutMeText2 } from './copy';
import betsy from '../../../images/betsy.jpg';

const AboutMe = () => {
  return (
    <Section id="about-me">
      <Wrapper>
        <h1>About Me</h1>
        <Row>
          <Column>
            <img src={betsy} />
          </Column>
        </Row>
        <Row>
          <Column>
            <p>{aboutMeText1}</p>
          </Column>
          <Column>
            <p>{aboutMeText2}</p>
          </Column>
        </Row>
      </Wrapper>
    </Section>
  );
};

export default AboutMe;
