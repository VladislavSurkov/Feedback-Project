import styled from 'styled-components';

export const CategoriesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  width: 225px;
  height: 180px;
  box-sizing: border-box;

  margin-bottom: 24px;
  padding: 24px;
  border-radius: 10px;
  background: #fff;
`;

export const CategoriesBtn = styled.div`
  display: flex;
  align-items: center;

  font-family: 'Jost';
  font-size: 13px;
  font-weight: 600;

  height: 30px;
  color: #4661e6;
  background-color: #f2f4ff;

  padding: 5px 16px;
  border-radius: 10px;
  text-decoration: none;

  &.selected {
    color: #f2f4ff;
    background-color: #4661e6;
  }

  &:hover {
    color: #4661e6;
    background-color: #cfd7ff;
    cursor: pointer;
  }
`;

