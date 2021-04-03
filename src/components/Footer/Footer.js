import React from 'react';
import { StyledFooter, StyledList } from './styles';
import { contact } from './copy';
import ContactMe from '../ContactMe/ContactMe';

const Footer = () => {
  return (
    <StyledFooter>
      <ContactMe />
      <p>© Betsy Groton</p>
    </StyledFooter>
  );
};

export default Footer;
