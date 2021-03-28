import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  margin: 1em;
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
`;
