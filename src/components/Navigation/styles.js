import styled from 'styled-components';

export const NavBar = styled.div`
  font-size: 20px;
  position: fixed;
  width: 100%;
  .header {
    background: peachpuff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    margin: 0;
    color: black;
    * {
      cursor: pointer;
    }
    .active {
      border-bottom: 1px solid black;
    }
  }
  .scrolling-buttons {
    display: flex;
    flex-direction: column;
  }
`;
