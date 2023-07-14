import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

const COLOR = {
  first: css`
    color: #f2f4fe;
    background: #ad1fea;
  `,
  second: css`
    color: #f2f4fe;
    background: #4661e6;
  `,
  third: css`
    color: #f2f4fe;
    background: #3a4374;
  `,
  fourth: css`
    color: #f2f4fe;
    background: #d73737;
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

  ${props => props.width && WIDTH[props.width]}
  ${props => props.color && COLOR[props.color]}
`;
