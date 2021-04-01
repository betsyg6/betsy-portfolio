import styled from 'styled-components';

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    border-bottom: 0px;
    text-align: center;
    margin-top: 0px;
    margin-left: 0px;
  }
`;

export const StyledList = styled.div`
  display: flex;
  width: 40%;
  flex-direction: row;
  text-align: center;
  justify-content: space-evenly;

  font-family: 'Darker Grotesque', sans-serif;
  font-size: 1.2rem;
`;
