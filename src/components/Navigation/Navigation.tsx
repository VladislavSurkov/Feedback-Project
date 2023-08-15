import { FC, useState } from 'react';

import SideBarMenu from './SideBarMenu/SideBarMenu';
import RoadMap from './RoadMap/RoadMap';
import {
  Box,
  List,
  NavIcon,
  SaidBarBackDrop,
  SaidBarNav,
  BurgerMenu,
  CloseMenu,
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
          <SideBarMenu />
          <RoadMap />
        </SaidBarNav>
      </SaidBarBackDrop>
    </>
  );
};

export default SideBar;
