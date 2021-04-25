import styled from 'styled-components'
import * as COLORS from '../../constants/colors'

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    border-bottom: 0px;
    text-align: center;
    margin-top: 0px;
    margin-left: 0px;
  }
`

export const TextWrapper = styled.div`
  background-color: ${COLORS.WHITE};
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
