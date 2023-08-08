import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imgMobile from '../../images/mobile/background-header.png';
import { ReactComponent as NavBurger } from 'icons/mobile/icon-hamburger.svg';
import { ReactComponent as NavClose } from 'icons/mobile/icon-close.svg';

export const Box = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-image: url(${imgMobile});
  background-size: cover;
`;
export const SaidBarBackDrop = styled.div<{
  sidebar: number | undefined
}>`
  position: absolute;
  right: 0;
  z-index: 2;
  width:  ${({ sidebar }) => (sidebar ? '100%' : '0')};;
  height: 100%;
  background-color: #00000080; 
`

export const SaidBarNav = styled.div<{
  sidebar: number | undefined
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
  right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition-property: right;
  transition-duration: 350ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;


export const List = styled.ul`
  color: #fff;
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
padding: 24px ;
border-radius: 10px;
background: #fff;
`;


export const BurgerMenu = styled(NavBurger)`

`;
export const CloseMenu = styled(NavClose)`

`;
