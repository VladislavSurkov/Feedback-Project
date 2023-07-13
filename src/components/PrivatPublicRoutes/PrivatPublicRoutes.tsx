import React from 'react';
import { Navigate } from 'react-router-dom';
import { useTypedSelector } from 'hooks/useHooks';

interface RouteProps {
  component: JSX.Element;
}

export const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
}) => {
  const { isLogin } = useTypedSelector(state => state.auth);

  return !isLogin ? <Navigate to="/login" /> : Component;
};

export const PublicRoute: React.FC<RouteProps> = ({ component: Component }) => {
  const { isLogin } = useTypedSelector(state => state.auth);

  return isLogin ? <Navigate to="/" /> : Component;
};
