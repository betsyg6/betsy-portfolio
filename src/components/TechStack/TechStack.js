import React from 'react';
import Wrapper from '../../ui-components/Wrapper';
import { languages, libraries, tools } from './copy';
import { Row, Col } from './styles';

const TechStack = () => {
  return (
    <div id="tech-stack">
      <Wrapper>
        <h1>Tech Stack</h1>
        <Row>
          <Col>
            <div className="card-container">
              <div className="card">
                <a>
                  <div className="card--display">
                    <h2>Languages</h2>
                  </div>
                  <div className="card--hover">
                    <h2>Languages</h2>
                    <ul>
                      {languages.map((language) => {
                        return (
                          <li key={languages.indexOf(language)}>{language} </li>
                        );
                      })}
                    </ul>
                  </div>
                </a>
                <div className="card--border" />
              </div>
            </div>
          </Col>
          <Col>
            <div className="card-container">
              <div className="card">
                <a>
                  <div className="card--display">
                    <h2>Libraries</h2>
                  </div>
                  <div className="card--hover">
                    <h2>Libraries</h2>
                    <ul>
                      {libraries.map((library) => {
                        return (
                          <li key={libraries.indexOf(library)}>{library}</li>
                        );
                      })}
                    </ul>
                  </div>
                </a>
                <div className="card--border" />
              </div>
            </div>
          </Col>
          <Col>
            <div className="card-container">
              <div className="card">
                <a>
                  <div className="card--display">
                    <h2>Tools</h2>
                  </div>
                  <div className="card--hover">
                    <h2>Tools</h2>
                    <ul>
                      {tools.map((tool) => {
                        return <li key={tools.indexOf(tool)}>{tool}</li>;
                      })}
                    </ul>
                  </div>
                </a>
                <div className="card--border" />
              </div>
            </div>
          </Col>
        </Row>
      </Wrapper>
    </div>
  );
};

export default TechStack;
