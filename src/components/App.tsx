import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Suggestions } from '../pages/Suggestions/Suggestions';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Registration from 'pages/Registration';
import Login from 'pages/Login';

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Suggestions />} />
          <Route path="/ux" element={<div>ux!!!</div>} />
          <Route path="/enhancement" element={<div>en!!!</div>} />
          <Route path="/bug" element={<div>bug!!!</div>} />
          <Route path="/feature" element={<div>feature!!!</div>} />
        </Route>
        <Route path="*" element={<SharedLayout />} />
      </Routes>
    </>
  );
};
export default App;
