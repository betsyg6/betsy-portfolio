import styled from 'styled-components'

export const List = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: auto;
  margin-right: auto;

  a {
    text-decoration: none;
    color: black;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 1em;
`
