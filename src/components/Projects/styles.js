import styled from 'styled-components';
import * as COLORS from '../../constants/colors';

export const StyledSection = styled.div`
  background-color: ${COLORS.LIGHT2};
`;

export const StyledContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .slick-dots {
    bottom: 3rem;
  }
`;
