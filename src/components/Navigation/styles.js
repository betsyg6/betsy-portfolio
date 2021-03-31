import styled from 'styled-components';
import * as COLORS from '../../constants/colors';

export const NavBar = styled.div`
  font-size: 20px;
  position: fixed;
  width: 100%;
  z-index: 10;
  background: ${COLORS.DARK1};
  .header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    margin-left: 25%;
    margin-right: 25%;
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
