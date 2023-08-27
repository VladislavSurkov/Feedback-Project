import { FC, useState } from 'react';

import SideBarMenu from '../SideBarMenu/SideBarMenu';
import RoadMapMenu from '../RoadMap/RoadMapMenu';
import {
  SaidBarBox,
  SaidBarList,
  NavIcon,
  SaidBarBackDrop,
  SaidBarNav,
  BurgerMenu,
  CloseMenu,
} from './SideBar.styled';

const SideBar: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);

  return (
    <>
      <SaidBarBox>
        <SaidBarList>
          <li>Frontend Mentor</li>
          <li>FeedBack Board</li>
        </SaidBarList>
        <NavIcon to="#" onClick={showSideBar}>
          {!sidebar ? <BurgerMenu /> : <CloseMenu />}
        </NavIcon>
      </SaidBarBox>

      <SaidBarBackDrop sidebar={sidebar ? 1 : undefined}>
        <SaidBarNav sidebar={sidebar ? 1 : undefined}>
          <SideBarMenu />
          <RoadMapMenu />
        </SaidBarNav>
      </SaidBarBackDrop>
    </>
  );
};

export default SideBar;
