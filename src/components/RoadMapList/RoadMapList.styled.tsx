import styled from 'styled-components';

const statusColors = {
  Planned: '#F49F85',
  'In-Progress': '#AD1FEA',
  Live: '#62BCFA',
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
  &.active {
    display: flex;
  }
`;
