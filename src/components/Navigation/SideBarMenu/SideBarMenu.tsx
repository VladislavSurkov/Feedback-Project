import { FC } from 'react';
import { SidebarItems } from 'helpers/types/SidebarTypes';
import { SidebarLink, SidebarText } from './SideBarMenu.styled';

type SidebarLinkProps = {
  item: SidebarItems;
};

const SideBarMenu: FC<SidebarLinkProps> = ({ item }) => {
  
  return (
    <>
      <SidebarLink to={item.path}>
          <SidebarText>{item.title}</SidebarText>
      </SidebarLink>
    </>
  );
};
export default SideBarMenu;
