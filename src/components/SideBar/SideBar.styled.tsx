import styled from 'styled-components';
import { Link } from 'react-router-dom';
import imgMobile from '../../images/mobile/background-header.png';


export const SaidBarBox = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-image: url(${imgMobile});
  background-size: cover;
`;

export const SaidBarList = styled.ul`
  color: #fff;
  font-family: 'Jost';
  font-size: 15px;
  font-weight: 700;

  :last-child {
    font-weight: 500;
    font-size: 13px;
    opacity: 0.75;
  }
`;

export const NavIcon = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 16px;
  height: 16px;
`;
export const SideBarWrap = styled.div`
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

export const SaidBarBackDrop = styled.div<{
  sidebar: number | undefined;
}>`
  position: absolute;
  right: 0;
  z-index: 2;
  width: ${({ sidebar }) => (sidebar ? '100%' : '0')};
  height: 100%;
  background-color: #00000080;
`;

export const SaidBarNav = styled.div<{
  sidebar: number | undefined;
}>`
  position: fixed;
  display: flex;
  box-sizing: border-box;
  width: 271px;
  height: 100vh;
  padding: 24px;
  align-items: center;
  flex-direction: column;
  background-color: #f7f8fd;

  top: 72px;
  right: ${({ sidebar }) => (sidebar ? '0' : '-200%')};
  transition-property: right;
  transition-duration: 350ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const LogoutButton = styled.div`
  margin-top: 54px;
`;


