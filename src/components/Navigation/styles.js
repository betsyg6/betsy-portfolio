import styled from 'styled-components';
import * as COLORS from '../../constants/colors';

export const NavBar = styled.div`
  font-size: 20px;
  position: fixed;
  width: 100%;
  z-index: 10;
  .header {
    background: ${COLORS.DARK1};
    padding: 20px;
    display: flex;
    justify-content: space-between;
    margin: 0;
    color: ${COLORS.WHITE};
    * {
      cursor: pointer;
    }
    .active {
      border-bottom: 1px solid ${COLORS.WHITE};
    }
  }
  .scrolling-buttons {
    display: flex;
    flex-direction: column;
  }

  a {
    &:hover {
      color: ${COLORS.LIGHT1};
    }
  }
`;
