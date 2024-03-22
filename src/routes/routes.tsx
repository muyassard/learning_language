import React from 'react';
import { Navigate, Route, Routes as Switch } from 'react-router-dom';
import { Auth, Dash } from 'pages';
import { session } from 'services/session';

const Routes: React.FC = () => {
  const user = session.get('user');
  const isAuthenticated = user ? user[0] : null;

  return (
    <Switch>
      <Route path="app">
        <Route path="dashboard" element={<Dash.Dashboard />} />
        <Route index path="*" element={<Navigate to="/app/dashboard" />} />
      </Route>

      <Route path="auth">
        <Route path="login" element={<Auth.Login />} />
        <Route path="register" element={<Auth.Register />} />
        <Route index path="*" element={<Navigate to="/auth/login" />} />
      </Route>

      <Route index path="*" element={<Navigate to={isAuthenticated ? '/app/dashboard' : '/auth/login'} />} />
    </Switch>
  );
};
export default Routes;
