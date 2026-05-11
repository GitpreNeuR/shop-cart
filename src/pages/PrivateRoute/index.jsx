import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUserContext } from '../../context/user_context';

const PrivateRoute = ({ children, path }) => {
  const { currentUser } = useUserContext();
  const location = useLocation();

  const authRoutes = [
    '/login',
    '/register',
    '/forgot-password',
    '/reset-password',
  ];

  // If user is logged in and tries to access auth pages
  if (authRoutes.includes(path)) {
    return currentUser ? (
      <Navigate to={location.state?.from || '/'} replace />
    ) : (
      children
    );
  }

  // Protected routes
  return currentUser ? (
    children
  ) : (
    <Navigate
      to="/login"
      state={{ from: location.pathname }}
      replace
    />
  );
};

export default PrivateRoute;