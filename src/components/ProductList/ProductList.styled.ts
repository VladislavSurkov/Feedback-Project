import styled from 'styled-components';


export const ProductBox = styled.div`
  display: flex;
  position: relative;
  background-color: #ffffff;
  /* margin-bottom: 16px; */
  margin: 0 24px 16px;
  padding: 24px;
`;
export const ProductTitle = styled.h2`
  font-family: 'Jost';
  font-weight: 700;
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 5px;

  color: #3a4374;
`;

export const ProductDesc = styled.span`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.5;

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
  margin: 10px 0 70px;
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
