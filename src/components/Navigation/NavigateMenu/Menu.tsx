import { FC } from 'react';
import { SidebarItems } from 'helpers/models/SidebarTypes';
import { Item, SidebarLabel, SidebarLink } from './menu.styled';

type SidebarLinkProps = {
  item: SidebarItems;
};

const SideBarMenu: FC<SidebarLinkProps> = ({ item }) => {
  return (
    <>
      <SidebarLink to={item.path}>
        <Item>
          <SidebarLabel>{item.title}</SidebarLabel>
        </Item>
      </SidebarLink>
    </>
  );
};
export default SideBarMenu;
