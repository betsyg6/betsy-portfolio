import styled from 'styled-components'
import * as COLORS from '../../constants/colors'

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  margin-right: 15%;

  .full {
    min-height: 100vh;
  }

  .third {
    min-height: 30vh;
  }

  h1 {
    font-size: 4rem;
    margin-top: 70px;
    margin-left: 10px;
    width: 100%;
    font-family: 'Bungee Shade', cursive;
  }

  .name {
    font-size: 8rem;
  }

  .dark-header {
    color: ${COLORS.DARK2};
  }

  .light-header {
    color: ${COLORS.WHITE};
  }

  h2 {
    font-family: 'Shippori Mincho B1', serif;
  }

  p {
    font-size: 1.2rem;
    font-family: 'Darker Grotesque', sans-serif;
  }
`
