import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from 'icons/icon-arrow-left.svg';

export const RoadLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0 24px;
  background-color: #373f68;
`;

export const BackCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`;

export const BackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  font-family: 'Jost';
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  background-color: transparent;
  border: none;
  &:hover {
    text-decoration-line: underline;
    cursor: pointer;
  }
`;

export const ArrowBtn = styled(ArrowLeft)`
  stroke: #fff;
`;

export const RoadTitle = styled.h1`
  font-family: 'Jost';
  font-size: 18px;
  font-weight: 700;
  color: #fff;
`;
