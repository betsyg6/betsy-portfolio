import React from 'react';
import { WrapperStyled, HalfWrapStyled } from './styles';

export const Wrapper = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export const HalfWrapper = ({ children }) => {
  return <HalfWrapStyled>{children}</HalfWrapStyled>;
};
