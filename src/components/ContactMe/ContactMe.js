import React from 'react';
import { StyledList } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faFile } from '@fortawesome/free-solid-svg-icons';
import {
  faMediumM,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const ContactMe = () => {
  return (
    <StyledList>
      <a href="https://betsyg6.github.io/Resume/">
        <FontAwesomeIcon icon={faFile} />
      </a>
      <a href="https://github.com/betsyg6">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/elizabethgroton">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="mailto:grotoned@gmail.com">
        <FontAwesomeIcon icon={faPaperPlane} />
      </a>
      <a href="https://grotoned.medium.com">
        <FontAwesomeIcon icon={faMediumM} />
      </a>
    </StyledList>
  );
};

export default ContactMe;
