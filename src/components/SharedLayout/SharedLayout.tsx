import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from '../Navigation/Navigation';


 const SharedLayout: FC = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
};

export default SharedLayout
