import styled from 'styled-components';
import * as COLORS from '../constants/colors';

export const WrapperStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 45px;
    margin-top: 70px;
    margin-left: 10px;
    width: 100%;
    border-bottom: 1px solid ${COLORS.MEDIUM1};
    font-family: 'Bungee Shade', cursive;
    color: ${COLORS.DARK2};
  }
  h2 {
    font-family: 'Shippori Mincho B1', serif;
  }
  p {
    font-size: 22px;
    font-family: 'Shippori Mincho B1', serif;
  }
`;

export const HalfWrapStyled = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 45px;
    margin-top: 70px;
    margin-left: 10px;
    width: 100%;
    border-bottom: 1px solid ${COLORS.MEDIUM1};
    font-family: 'Bungee Shade', cursive;
    color: ${COLORS.DARK2};
  }
  h2 {
    font-family: 'Shippori Mincho B1', serif;
  }
  p {
    font-size: 22px;
    font-family: 'Shippori Mincho B1', serif;
  }
`;

export const CardStyled = styled.div`
  border-radius: 7px;
  border: solid 1px black;
  margin: 3px;
  padding: 5px;
  width: 80px;
  &:hover {
    color: ${COLORS.LIGHT2};
    background: ${COLORS.DARK2};
  }
`;

export const ProjectStyled = styled.div`
  border-radius: 7px;

  width: 80%;
  margin: 10%;
  height: 80%;
  padding: 10px;

  p {
    font-size: 15px;
  }

  img {
    width: 100%;
    height: auto;
    box-shadow: 10px 10px 6px 1px ${COLORS.MEDIUM1};
  }
`;

export const ArticleStyled = styled.div`
  border-radius: 7px;
  border: solid 1px black;
  margin: 8px;
  width: 80%;
  height: 50%;
  padding: 10px;

  a {
    text-decoration: none;
    color: black;
  }

  span {
    text-transform: uppercase;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 5rem;
`;
