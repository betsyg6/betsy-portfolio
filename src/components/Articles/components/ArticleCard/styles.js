import styled from 'styled-components'
import * as COLORS from '../../../../constants/colors'

export const Article = styled.div`
  background-color: ${COLORS.WHITE};
  font-family: 'Darker Grotesque', sans-serif;
  font-size: 1.4rem;
  width: 200px;
  height: 200px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  position: relative;
  border: 3px solid ${COLORS.MEDIUM1};
  padding: 15px;
  margin: 50px;
  box-shadow: 10px -10px 0 -3px ${COLORS.WHITE}, 10px -10px ${COLORS.MEDIUM2},
    20px -20px 0 -3px ${COLORS.WHITE}, 20px -20px ${COLORS.MEDIUM1},
    30px -30px 0 -3px ${COLORS.WHITE}, 30px -30px ${COLORS.MEDIUM2},
    40px -40px 0 -3px ${COLORS.WHITE}, 40px -40px ${COLORS.MEDIUM1};
  transition: box-shadow 1s, top 1s, left 1s;
  position: relative;
  top: 0;
  left: 0;
  cursor: pointer;

  &:after {
    display: block;
    padding-bottom: 100%;
  }

  &:hover {
    top: -40px;
    left: 40px;
    color: ${COLORS.MEDIUM1};
    box-shadow: 0 0 0 -3px ${COLORS.WHITE}, 0 0 0 0 ${COLORS.MEDIUM2},
      0 0 0 -3px ${COLORS.WHITE}, 0 0 0 0 ${COLORS.MEDIUM1},
      0 0 0 -3px ${COLORS.WHITE}, 0 0 0 0 ${COLORS.MEDIUM2},
      0 0 0 -3px ${COLORS.WHITE}, 0 0 0 0 ${COLORS.MEDIUM1};
  }
`
