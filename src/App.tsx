import { FC, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Suggestions } from './pages/Suggestions/Suggestions';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { useAppDispatch } from 'hooks/useHooks';
import { fetchingCurrentUser } from 'redux/user/auth-operations';
import { PrivateRoute, PublicRoute } from 'components/PrivatPublicRoutes/PrivatPublicRoutes';
import Registration from 'pages/Registration';
import Login from 'pages/Login';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchingCurrentUser());
  }, [dispatch]);

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
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
export default App;
