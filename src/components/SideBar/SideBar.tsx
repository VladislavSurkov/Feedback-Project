import { FC } from 'react';
import { useAppDispatch, useTypedSelector } from 'hooks/useHooks';
import { setOverflow } from 'redux/modal/modal-slice';
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
  const dispatch = useAppDispatch();
  const { overflow } = useTypedSelector(state => state.modal);
  const { user } = useTypedSelector(state => state.auth);

  const showSideBar = () => {
    dispatch(setOverflow(!overflow));
  };

  return (
    <>
      <SaidBarBox>
        <SaidBarList>
          <li>{user.name}</li>
          <li>{user.email}</li>
        </SaidBarList>
        <NavIcon to="#" onClick={showSideBar}>
          {!overflow ? <BurgerMenu /> : <CloseMenu />}
        </NavIcon>
      </SaidBarBox>

      <SaidBarBackDrop sidebar={overflow ? 1 : undefined}>
        <SaidBarNav sidebar={overflow ? 1 : undefined}>
          <SideBarMenu />
          <RoadMapMenu />
        </SaidBarNav>
      </SaidBarBackDrop>
    </>
  );
};

export default SideBar;
