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

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 600px;

  h1 {
    border-bottom: 0px;
    text-align: center;
    margin-top: 0px;
    margin-left: 0px;
  }
`
