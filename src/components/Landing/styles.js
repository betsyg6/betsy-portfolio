import styled from 'styled-components'
import * as COLORS from '../../constants/colors'

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    border-bottom: 0px;
    text-align: center;
    margin-top: 100px;
    margin-left: 0px;
  }

  h2 {
    background-color: ${COLORS.WHITE};
  }
`
