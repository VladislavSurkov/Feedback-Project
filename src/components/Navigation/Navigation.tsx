import { FC, useState } from 'react';

import SideBarMenu from './SideBarMenu/SideBarMenu';
import StatusMap from './StatusMap/StatusMap';
import { SidebarData } from 'selectItems/selectItems';
import {
  Box,
  List,
  NavIcon,
  SaidBarBackDrop,
  SaidBarNav,
  SideBarWrap,
  BurgerMenu,
  CloseMenu,
  StatusMapContainer,
} from './Navigation.styled';


const SideBar: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);

  return (
    <>
      <Box>
        <List>
          <li>Frontend Mentor</li>
          <li>FeedBack Board</li>
        </List>
        <NavIcon to="#" onClick={showSideBar}>
          {!sidebar ? <BurgerMenu /> : <CloseMenu />}
        </NavIcon>
      </Box>
      <SaidBarBackDrop sidebar={sidebar ? 1 : undefined}>
        <SaidBarNav sidebar={sidebar ? 1 : undefined}>
          <SideBarWrap>
            {SidebarData.map((item, index) => {
              return <SideBarMenu item={item} key={index} />;
            })}
          </SideBarWrap>

          <StatusMapContainer>
            <StatusMap />
          </StatusMapContainer>
        </SaidBarNav>
      </SaidBarBackDrop>
    </>
  );
};

export default SideBar;
