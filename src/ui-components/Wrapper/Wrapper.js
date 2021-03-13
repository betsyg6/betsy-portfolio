import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 45px;
    margin-top: 70px;
  }
  p {
    font-size: 22px;
  }
`;

export default function Wrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}
