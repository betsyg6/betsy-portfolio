import styled from 'styled-components';

export const WrapperStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 45px;
    margin-top: 70px;
  }
  p {
    font-size: 22px;
  }
`;

export const HalfWrapStyled = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 45px;
    margin-top: 70px;
  }
  p {
    font-size: 22px;
  }
`;

export const CardStyled = styled.div`
  border-radius: 7px;
  border: solid 1px black;
  margin: 3px;
  padding: 5px;
  width: 80px;
  &:hover {
    color: white;
    background: black;
  }
`;

export const ProjectStyled = styled.div`
  border-radius: 7px;
  border: solid 1px black;
  width: 80%;
  margin: 10%;
  height: 100%;

  p {
    font-size: 15px;
  }
`;

export const ArticleStyled = styled.div`
  border-radius: 7px;
  border: solid 1px black;
  margin: 8px;
  width: 80%;
  height: 50%;

  a {
    text-decoration: none;
    color: black;
  }

  span {
    text-transform: uppercase;
  }
`;
