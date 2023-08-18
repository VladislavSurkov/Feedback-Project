import { Container } from './Button.styled';
import { ButtonProps } from 'helpers/types/button';


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
