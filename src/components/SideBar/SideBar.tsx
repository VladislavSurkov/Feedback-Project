import { FC } from 'react';
import { useAppDispatch, useTypedSelector } from 'hooks/useHooks';
import { setSidebar } from 'redux/modal/modal-slice';
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu';
import RoadMapMenu from '../RoadMapMenu/RoadMapMenu';
import { Button } from 'components/Buttons/Button';
import { ReactComponent as NavBurger } from 'icons/mobile/icon-hamburger.svg';
import { ReactComponent as NavClose } from 'icons/mobile/icon-close.svg';
import { logout } from 'redux/user/auth-operations';
import {
  SaidBarBox,
  SaidBarList,
  NavIcon,
  SaidBarBackDrop,
  SaidBarNav,
  LogoutButton,
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
          {!sidebar ? <NavBurger /> : <NavClose />}
        </NavIcon>
      </SaidBarBox>

      <SaidBarBackDrop
        onClick={handleSideBarClose}
        sidebar={sidebar ? 1 : undefined}
      >
        <SaidBarNav sidebar={sidebar ? 1 : undefined}>
          <CategoriesMenu />
          <RoadMapMenu />

          <LogoutButton>
            <Button
              onClick={() => dispatch(logout())}
              color={'second'}
              width={'logout'}
            >
              Logout
            </Button>
          </LogoutButton>
        </SaidBarNav>
      </SaidBarBackDrop>
    </>
  );
};

export default SideBar;
