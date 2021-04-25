import styled from 'styled-components'
import * as COLORS from '../../constants/colors'

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  justify-content: center;
  text-align: center;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  margin: 1em;
  border: 1px solid black;

  h2 {
    text-align: center;
    border-bottom: 1px solid black;
    margin: 0px;
    font-family: 'Shippori Mincho B1', serif;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    font-family: 'Darker Grotesque', sans-serif;
    font-size: 1.2rem;
    padding: 0px;
  }
`
