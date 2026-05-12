import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUserContext } from '../../context/user_context';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useUserContext();
  const location = useLocation();

  if (!currentUser) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return children;
};

export default PrivateRoute;