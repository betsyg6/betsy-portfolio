import styled from 'styled-components';
import * as COLORS from '../constants/colors';

export const WrapperStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  margin-right: 15%;

  h1 {
    font-size: 45px;
    margin-top: 70px;
    margin-left: 10px;
    width: 100%;

    font-family: 'Bungee Shade', cursive;
    color: ${COLORS.DARK2};
  }
  h2 {
    font-family: 'Shippori Mincho B1', serif;
  }
  p {
    font-size: 1.2rem;
    font-family: 'Darker Grotesque', sans-serif;
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
    color: ${COLORS.MEDIUM1};
    border: solid 1px ${COLORS.MEDIUM1};
  }
`;

export const ProjectStyled = styled.div`
  width: 60%;
  margin: 10%;
  height: 80%;

  ul {
    list-style-type: none;
    text-align: left;
    font-family: 'Darker Grotesque', sans-serif;
    font-size: 1.4rem;
  }

  p {
    font-size: 1.4rem;
    font-family: 'Darker Grotesque', sans-serif;
  }

  img {
    width: 100%;
    height: auto;
    box-shadow: 10px 10px 6px 1px ${COLORS.MEDIUM1};
  }

  a {
    margin: 2em;
    text-decoration: none;
    color: black;
    border-radius: 7px;
    border: solid 1px black;
    margin: 3px;
    padding: 5px;
    font-family: 'Darker Grotesque', sans-serif;
    font-size: 1.4rem;

    &:hover {
      color: ${COLORS.MEDIUM1};
      border: solid 1px ${COLORS.MEDIUM1};
    }
  }
`;

export const ArticleStyled = styled.div`
  background-color: var(${COLORS.MEDIUM1});
  display: block;
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 1.4rem;
  width: 300px;
  min-height: 90px;
  border: 3px solid ${COLORS.MEDIUM1};
  padding: 15px;
  margin: 50px;
  box-shadow: 10px -10px 0 -3px ${COLORS.WHITE}, 10px -10px ${COLORS.MEDIUM2},
    20px -20px 0 -3px ${COLORS.WHITE}, 20px -20px ${COLORS.MEDIUM1},
    30px -30px 0 -3px ${COLORS.WHITE}, 30px -30px ${COLORS.MEDIUM2},
    40px -40px 0 -3px ${COLORS.WHITE}, 40px -40px ${COLORS.MEDIUM1};
  transition: box-shadow 1s, top 1s, left 1s;
  position: relative;
  top: 0;
  left: 0;
  cursor: pointer;

  &:hover {
    top: -40px;
    left: 40px;
    box-shadow: 0 0 0 -3px ${COLORS.WHITE}, 0 0 0 0 ${COLORS.MEDIUM2},
      0 0 0 -3px ${COLORS.WHITE}, 0 0 0 0 ${COLORS.MEDIUM1},
      0 0 0 -3px ${COLORS.WHITE}, 0 0 0 0 ${COLORS.MEDIUM2},
      0 0 0 -3px ${COLORS.WHITE}, 0 0 0 0 ${COLORS.MEDIUM1};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 5rem;
`;
