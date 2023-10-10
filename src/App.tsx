import { FC, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Suggestions from './pages/Suggestions/Suggestions';
import RoadMap from 'pages/RoadMap/RoadMap';
import Registration from 'pages/Registration/Registration';
import Login from 'pages/Login/Login';

import { useAppDispatch, useTypedSelector } from 'hooks/useHooks';
import { fetchingCurrentUser } from 'redux/user/auth-operations';
import {
  PrivateRoute,
  PublicRoute,
} from 'components/PrivatPublicRoutes/PrivatPublicRoutes';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Backdrop from 'components/Backdrop/Backdrop';
import ModalAddFeedback from 'components/ModalAddFeedback/ModalAddFeedback';
import { fetchProducts } from 'redux/todo/product-operations';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const {
    auth: { user },
    modal: { modal },
  } = useTypedSelector(state => state);

  useEffect(() => {
    dispatch(fetchingCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (user.email) {
      dispatch(fetchProducts());
    }
  }, [user, dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/register"
          element={<PublicRoute component={<Registration />} />}
        />
        <Route path="/login" element={<PublicRoute component={<Login />} />} />

        <Route path="/" element={<PrivateRoute component={<SharedLayout />} />}>
          <Route index element={<Suggestions />} />
        </Route>

        <Route
          path="/roadmap"
          element={<PrivateRoute component={<RoadMap />} />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {modal && (
        <Backdrop>
          <ModalAddFeedback />
        </Backdrop>
      )}
    </>
  );
};
export default App;
