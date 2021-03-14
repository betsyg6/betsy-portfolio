import styled from 'styled-components';

export const StyledSection = styled.div`
  background-color: pink;

  h1 {
    margin-bottom: 10px;
  }

  p {
    font-size: 15px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 1em;
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
`;
