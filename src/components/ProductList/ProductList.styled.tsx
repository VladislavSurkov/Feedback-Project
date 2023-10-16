import { statusColors } from 'helpers/items/statusItems';
import styled from 'styled-components';

export const ProductBox = styled.div`
  position: relative;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 16px;
  padding: 24px;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 6px;
    position: absolute;
    border-radius: 5px 5px 0px 0px;
    top: 0;
    left: 0;
    ${({ color }) =>
      color &&
      `background-color:${statusColors[color as keyof typeof statusColors]}`}
  }
`;

export const ProductStatus = styled.span<{ status: string | undefined }>`
  position: relative;
  display: block;
  color: #647196;
  font-family: 'Jost';
  font-size: 13px;
  font-weight: 400;

  padding-left: 15px;
  margin-bottom: 16px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    ${props =>
      props.status &&
      `background-color:${
        statusColors[props.status as keyof typeof statusColors]
      }`}
  }
`;

export const ProductTitle = styled.h2`
  font-family: 'Jost';
  font-weight: 700;
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 9px;

  color: #3a4374;
`;

export const ProductDesc = styled.span`
  display: block;
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.5;

  margin-bottom: 10px;
  color: #647196;
`;

export const ProductCategory = styled.div`
  width: 111px;
  font-family: 'Jost';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 70px;
  padding: 5px 0;

  background-color: #f2f4ff;
  border-radius: 10px;

  color: #4661e6;
`;

export const ProductUpvote = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 24px;
  padding: 6px 13px 6px 16px;

  background-color: #f2f4fe;
  border-radius: 10px;
`;

export const ProductComments = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 24px;
  right: 16px;
  padding: 6px 13px 6px 16px;
`;
