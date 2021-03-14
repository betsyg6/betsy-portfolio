import React from 'react';
import { Wrapper, Card } from '../../ui-components/';
import { languages, libraries, tools } from './copy';
import { Row, Col, RowNoWrap } from './styles';

const TechStack = () => {
  return (
    <div id="tech-stack">
      <Wrapper>
        <h1>Tech Stack</h1>
        <RowNoWrap>
          <Col>
            <Col>
              <h2>Languages:</h2>
              <Row>
                {languages.map((language) => {
                  return (
                    <Card key={languages.indexOf(language)} info={language} />
                  );
                })}
              </Row>
            </Col>
            <Col>
              <h2>Libraries:</h2>
              <Row>
                {libraries.map((library) => {
                  return (
                    <Card key={libraries.indexOf(library)} info={library} />
                  );
                })}
              </Row>
            </Col>
            <Col>
              <h2>Tools:</h2>
              <Row>
                {tools.map((tool) => {
                  return <Card key={tools.indexOf(tool)} info={tool} />;
                })}
              </Row>
            </Col>
          </Col>
          <Col>image placeholder</Col>
        </RowNoWrap>
      </Wrapper>
    </div>
  );
};

export default TechStack;
