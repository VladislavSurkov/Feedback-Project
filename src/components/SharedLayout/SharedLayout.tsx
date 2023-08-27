import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from '../Navigation/SideBar';


 const SharedLayout: FC = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
};

export default SharedLayout
