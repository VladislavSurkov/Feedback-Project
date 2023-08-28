import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 225px;
  height: 180px;
  box-sizing: border-box;
  padding: 24px;
  border-radius: 10px;
  background: #fff;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatusMapTitle = styled.h3`
  color: #3a4374;
  font-family: 'Jost';
  font-size: 18px;
  font-weight: 700;
`;

export const StatusMapLink = styled(Link)`
  font-family: 'Jost';
  font-size: 13px;
  font-weight: 600;
  text-decoration-line: none;
  color: #4661e6;

  &:hover {
    text-decoration-line: underline;
  }
`;

export const RoadLi = styled.li<{ status: string }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-family: 'Jost';
  font-size: 16px;
  font-weight: 400;
  
  padding-left: 16px;
  margin: 8px 0;

  color: #647196;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => {
      switch (props.status) {
        case 'Planned':
          return '#F49F85';
        case 'In-Progress':
          return '#AD1FEA';
        case 'Live':
          return '#62BCFA';
        default:
          return;
      }
    }};
  }
`;

export const RoadCount = styled.span`
  font-family: 'Jost';
  font-size: 16px;
  font-weight: 700;

  color: #647196;
`;
