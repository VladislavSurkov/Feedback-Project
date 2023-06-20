import SideBar from '../Navigation/Navigation';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout: FC = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
};
