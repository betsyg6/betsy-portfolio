import styled from 'styled-components';
import * as COLORS from '../../constants/colors';

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