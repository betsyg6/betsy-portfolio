import React from 'react';
import { WrapperStyled } from './styles';

const Wrapper = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export default Wrapper