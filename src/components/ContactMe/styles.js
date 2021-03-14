import styled from 'styled-components';
import * as COLORS from '../../constants/colors';

export const StyledSection = styled.div`
  background-color: ${COLORS.LIGHT2};

  a {
    text-decoration: none;
    color: black;
  }
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-evenly;
`;
