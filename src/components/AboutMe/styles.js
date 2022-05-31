import styled from 'styled-components'
import * as COLORS from '../../constants/colors'

export const Section = styled.div`
  h1 {
    margin-bottom: 10px;
  }

  p {
    font-size: 1.4rem;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 1em;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;

  p {
    margin: 1em;
  }

  img {
    margin-top: 40px;
    width: 70%;
    height: auto;
    border: 10px solid ${COLORS.LIGHT1};
    border-radius: 20%;
  }
`

export const TextWrapper = styled.div`
  background-color: ${COLORS.WHITE};
`
