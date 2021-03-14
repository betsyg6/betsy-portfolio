import React from 'react';
import { Card, HalfWrapper } from '../../ui-components';
import { StyledSection, StyledList } from './styles';
import { contact } from './copy';

const ContactMe = () => {
  return (
    <StyledSection id="contact-me">
      <HalfWrapper>
        <h1>Contact Me</h1>
        <StyledList>
          {contact.map((info) => {
            return (
              <a href={info.link} key={info.link}>
                <Card info={info.name} />
              </a>
            );
          })}
        </StyledList>
      </HalfWrapper>
    </StyledSection>
  );
};

export default ContactMe;
