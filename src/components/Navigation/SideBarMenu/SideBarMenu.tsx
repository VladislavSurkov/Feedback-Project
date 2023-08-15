import { FC } from 'react';
import { SidebarItems } from 'helpers/types/SidebarTypes';
import { SidebarLink, SidebarText, SideBarWrap } from './SideBarMenu.styled';
import { SidebarData } from 'selectItems/selectItems';

type SidebarLinkProps = {
  item: SidebarItems;
};

const SideBarMenu: FC = () => {
  return (
    <>
      <SideBarWrap>
        {SidebarData.map((item, index) => {
          return (
            <SidebarLink key={index} to={item.path}>
              <SidebarText>{item.title}</SidebarText>
            </SidebarLink>
          );
        })}
      </SideBarWrap>
    </>
  )
}
export default SideBarMenu;
