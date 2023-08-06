import { FC } from 'react';
import { SidebarItems } from 'helpers/types/SidebarTypes';
import {  SidebarLink } from './SideBarMenu.styled';

type SidebarLinkProps = {
  item: SidebarItems;
};

const SideBarMenu: FC<SidebarLinkProps> = ({ item }) => {
  
  return (
    <>
      <SidebarLink to={item.path}>
          <span>{item.title}</span>
      </SidebarLink>
    </>
  );
};
export default SideBarMenu;
