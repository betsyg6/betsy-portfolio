import React from 'react';
import { StyledFooter, StyledList } from './styles';
import { contact } from './copy';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledList>
        {contact.map((info) => {
          return (
            <a href={info.link} key={info.link}>
              {info.name}
            </a>
          );
        })}
      </StyledList>
      <p>© Betsy Groton</p>
    </StyledFooter>
  );
};

export default Footer;
