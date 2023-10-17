import { FC } from 'react';
import { useAppDispatch, useTypedSelector } from 'hooks/useHooks';
import { setSidebar } from 'redux/modal/modal-slice';
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu';
import RoadMapMenu from '../RoadMapMenu/RoadMapMenu';
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
  const { sidebar } = useTypedSelector(state => state.modal);
  const { user } = useTypedSelector(state => state.auth);

  const showSideBar = () => {
    dispatch(setSidebar(!sidebar));
  };

  const handleSideBarClose = ({ target, currentTarget }: React.MouseEvent) => {
    if (target === currentTarget) {
      showSideBar();
    }
  };

  return (
    <>
      <SaidBarBox>
        <SaidBarList>
          <li>{user.name}</li>
          <li>{user.email}</li>
        </SaidBarList>
        <NavIcon to="#" onClick={showSideBar}>
          {!sidebar ? <BurgerMenu /> : <CloseMenu />}
        </NavIcon>
      </SaidBarBox>

      <SaidBarBackDrop
        onClick={handleSideBarClose}
        sidebar={sidebar ? 1 : undefined}
      >
        <SaidBarNav sidebar={sidebar ? 1 : undefined}>
          <CategoriesMenu />
          <RoadMapMenu />
        </SaidBarNav>
      </SaidBarBackDrop>
    </>
  );
};

export default SideBar;
