import React from 'react';
import { Container } from './Button.styled';

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  color?: 'first' | 'second' | 'third' | 'fourth';
  width?: 'openModal' | 'postEdit' | 'addSave' | 'delete';
  type?: 'submit';
};

export const Button = ({
  onClick,
  children,
  color,
  width,
  type,
}: ButtonProps) => {
  return (
    <Container type={type} onClick={onClick} color={color} width={width}>
      {children}
    </Container>
  );
};
