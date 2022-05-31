import goalStreaker from '../../../images/goalstreaker.png'
import goBark from '../../../images/gobark.png'
import hallowoof from '../../../images/hallowoof.png'
import mapIt from '../../../images/mapit.png'
import shareMyNumbers from '../../../images/sharemynumbers.png'
import weatherWatcher from '../../../images/weatherwatcher.png'

export const projects = [
  {
    title: 'Share My Numbers',
    description:
      'Share My Numbers is a full stack web application that is designed to promote equal pay in the workplace for recent bootcamp graduates.',
    tech: ['Firebase', 'React'],
    website: 'https://youtu.be/cfJ5FI2Aco0',
    github: 'https://github.com/betsyg6/ShareMyNumbers',
    image: shareMyNumbers,
  },
  {
    title: 'Goal Streaker',
    description:
      "Goal Streaker is a full stack web application that allows a user to track their progress towards their goals. The application uses Firebase for user authentication and as a real time database. It also displays the user's goal statistics using Chart.js.",
    tech: ['Firebase', 'React', 'Chart.js'],
    website: 'https://goalstreaker.herokuapp.com/',
    github: 'https://github.com/betsyg6/goalStreaker',
    image: goalStreaker,
  },
  {
    title: 'Weather Watcher',
    description:
      'Weather Watcher is a Google Chrome Extension that was developed to demonstrated the impact that global warming has had on weather.',
    tech: ['Chrome Extensions', 'React'],
    website: 'https://www.youtube.com/watch?v=36AS_etm0JM&feature=youtu.be',
    github: 'https://github.com/Jackie-Sydney-Betsy/weather-chrome-extension',
    image: weatherWatcher,
  },
  {
    title: 'go.bARk',
    description:
      'go.bARk is an Augmented Reality mobile app that allows a user to play with a virtual dog, earn points for caring for their dog, and compete with their followers.',
    tech: [
      'Viro React',
      'React Native',
      'Node',
      'Express',
      'Sequelize',
      'PostgreSQL',
    ],
    website: 'https://www.youtube.com/watch?v=tJig6T0Ccoc',
    github: 'https://github.com/gh-capstone-team-c/Go.bARk',
    image: goBark,
  },
  {
    title: 'Map It!',
    description:
      'Map It is a full-stack web application that allows users to share and save maps.',
    tech: [
      'React-Leaflet',
      'Redux',
      'Node',
      'Express',
      'Sequelize',
      'PostgreSQL',
    ],
    website: 'https://mapitapp.herokuapp.com/',
    github: 'https://github.com/betsyg6/mapitapp',
    image: mapIt,
  },
  {
    title: 'HalloWOOF Costumes',
    description:
      "HalloWOOF is an e-commerce store that sells Halloween costumes for dogs. Don't let your pup go another Halloween without an eye-catching costume!",
    tech: ['React', 'Redux', 'Node', 'Express', 'Sequelize', 'PostgreSQL'],
    website: 'https://hallowoof.herokuapp.com/',
    github: 'https://github.com/Grace-Shopper-BG-JL-AV/grace-shopper',
    image: hallowoof,
  },
]
