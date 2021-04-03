import styled from 'styled-components';
import * as COLORS from '../../constants/colors';

export const ContactList = styled.div`
  display: flex;
  width: 40%;
  flex-direction: row;
  text-align: center;
  justify-content: space-evenly;
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 2rem;

  a {
    outline: none;
    text-decoration: none;
    color: ${COLORS.MEDIUM1};
  }

  a:hover {
    color: ${COLORS.MEDIUM2};
  }
`;
