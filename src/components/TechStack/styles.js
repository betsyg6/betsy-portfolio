import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 1em;
`;

export const RowNoWrap = styled.div`
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

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 5px;
  padding: 20px;
  width: 100%;
`;
