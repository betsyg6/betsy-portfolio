import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGem,
  faFolderOpen,
  faObjectGroup,
} from '@fortawesome/free-solid-svg-icons'

export const techStack = [
  {
    title: 'Languages',
    stack: ['Javascript', 'HTML', 'CSS'],
    icon: <FontAwesomeIcon icon={faGem} />,
  },
  {
    title: 'Libraries',
    stack: [
      'Node',
      'Express',
      'React',
      'Redux',
      'Mocha',
      'Chai',
      'Jasmine',
      'Jest',
      'Leaflet',
      'Passport',
      'Viro React',
      'React Native',
      'Gatsby',
      'Victory',
      'Socket.io',
    ],
    icon: <FontAwesomeIcon icon={faFolderOpen} />,
  },
  {
    title: 'Tools',
    stack: [
      'Git',
      'Github',
      'PostgreSQL',
      'Sequelize',
      'Heroku',
      'Travis-CI',
      'Netflify',
      'Postman',
      'Postico',
      'Firebase',
      'AWS',
      'Google OAuth',
      'Webpack',
      'Babel',
    ],
    icon: <FontAwesomeIcon icon={faObjectGroup} />,
  },
]
