import React from 'react';
import { Wrapper } from '../../ui-components/';
import { languages, libraries, tools } from './copy';
import { Row, Col } from './styles';

const TechStack = () => {
  return (
    <div id="tech-stack">
      <Wrapper>
        <h1>Tech Stack</h1>
        <Row>
          <Col>
            <h2>Languages:</h2>
            <ul>
              {languages.map((language) => {
                return <li key={languages.indexOf(language)}>{language} </li>;
              })}
            </ul>
          </Col>
          <Col>
            <h2>Libraries:</h2>
            <ul>
              {libraries.map((library) => {
                return <li key={libraries.indexOf(library)}>{library}</li>;
              })}
            </ul>
          </Col>
          <Col>
            <h2>Tools:</h2>
            <ul>
              {tools.map((tool) => {
                return <li key={tools.indexOf(tool)}>{tool}</li>;
              })}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>image placeholder</Col>
        </Row>
      </Wrapper>
    </div>
  );
};

export default TechStack;
