import styled from 'styled-components';
import { ReactComponent as PlusIcon } from 'icons/icon-new-feedback.svg';

export const StyledPlusIcon = styled(PlusIcon)`
  position: absolute;
  top: 0;
  left: 24px;
  transform: translateY(-50%);
`;

export const Title = styled.h2`
  font-family: 'Jost';
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.25px;

  color: #3a4374;
  margin-bottom: 24px;
`;

export const Box = styled.div`
  position: relative;
  padding: 44px 24px 24px;
  border-radius: 10px;
  background-color: #fff;
`;
