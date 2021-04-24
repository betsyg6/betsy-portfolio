import React from 'react';
import { FooterSection } from './styles';
import ContactMe from '../ContactMe/ContactMe';

const Footer = () => {
  return (
    <FooterSection>
      <ContactMe />
      <p>© Betsy Groton</p>
    </FooterSection>
  );
};

export default Footer;
