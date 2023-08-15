import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const SideBarWrap = styled.div`
display: flex;
flex-wrap: wrap;
gap: 8px;

width: 225px;
height: 180px;
box-sizing: border-box;

margin-bottom: 24px;
padding: 24px ;
border-radius: 10px;
background: #fff;
`;

export const SidebarLink = styled(Link)`
  color: #4661e6;
  height: 30px;
  background-color: #f2f4ff;
  padding: 5px 16px;
  border-radius: 10px;
  text-decoration: none;

  &:hover {
    background-color: #4661e6;
    color: #f2f4ff;
  }
`;

export const SidebarText = styled.span`
font-family: 'Jost';
font-size: 13px;
font-weight: 600;
`

