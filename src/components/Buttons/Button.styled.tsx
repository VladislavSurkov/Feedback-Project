import { ButtonProps } from 'helpers/types/button';
import styled, { css } from 'styled-components';

const COLOR = {
  first: css`
    color: #f2f4fe;
    background-color: #ad1fea;
    &:hover {
      background-color: #c75af6;
    }
  `,
  second: css`
    color: #f2f4fe;
    background-color: #4661e6;
    &:hover {
      background-color: #7c91f9;
    }
  `,
  third: css`
    color: #f2f4fe;
    background-color: #3a4374;
    &:hover {
      background-color: #656ea3;
    }
  `,
  fourth: css`
    color: #f2f4fe;
    background-color: #d73737;
    &:hover {
      background-color: #e98888;
    }
  `,
};
const WIDTH = {
  openModal: css`
    //mobile
    width: 134px;
  `,
  postEdit: css`
    //mobile
    width: 119px;
  `,
  addSave: css`
    //mobile
    width: 100%;
    margin-bottom: 16px;
  `,
  delete: css`
    //mobile
    width: 100%;
  `,
};

export const Container = styled.button<ButtonProps>`
  font-family: 'Jost';
  font-weight: 700;
  font-style: normal;
  border: none;
  border-radius: 10px;
  outline: none;

  height: 40px;

  &:hover {
    cursor: pointer;
  }

  ${props => props.width && WIDTH[props.width]}
  ${props => props.color && COLOR[props.color]}
`;
