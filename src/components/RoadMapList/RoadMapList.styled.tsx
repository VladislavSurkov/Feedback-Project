import styled from 'styled-components';
import { sortValue } from 'helpers/sorting/sortStatus';

const statusColors = {
  [sortValue.Planned]: '#F49F85',
  [sortValue.InProgress]: '#AD1FEA',
  [sortValue.Live]: '#62BCFA',
};

export const NavStatusCont = styled.div`
  display: flex;
  height: 60px;
  border-bottom: 1px solid #8c92b33f;
`;

export const NavStatusBtn = styled.button`
  color: #3a4374;
  text-align: center;
  font-family: Jost;
  font-size: 13px;
  font-weight: 700;
  border: none;
  background-color: transparent;
  width: 100%;
  opacity: 0.4;

  &.active {
    opacity: 1;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 4px;
      position: absolute;
      bottom: 0;
      left: 0;
      ${({ color }) =>
        color &&
        `background-color:${statusColors[color as keyof typeof statusColors]}`}
    }
  }
`;

export const SortProductCont = styled.div`
  display: none;
  flex-direction: column;
  padding: 0 24px;
  &.active {
    display: flex;
  }
`;

export const TitleCont = styled.div`
  font-family: 'Jost';
  margin: 24px 0;
`;

export const StatusTitle = styled.h3`
  color: #3a4374;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.25px;
`;

export const StatusDesc = styled.span`
  color: #647196;
  font-size: 13px;
  font-weight: 400;
`;
