import React from 'react';

import { ButtonStyled } from './styled';

interface Props {
  children: string;
}

export const Button: React.FC<any> = ({ children, ...props }: Props) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};