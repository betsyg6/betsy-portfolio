import styled from 'styled-components';
import * as COLORS from '../../constants/colors';

export const Section = styled.div`
  background-color: ${COLORS.LIGHT2};

  h1 {
    margin-bottom: 10px;
  }

  p {
    font-size: 1.4rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 1em;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;

  p {
    margin: 1em;
  }

  img {
    width: 80%;
    height: auto;
    box-shadow: 20px 20px 12px 1px ${COLORS.MEDIUM1};
  }
`;
