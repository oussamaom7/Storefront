import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AuthContext from './AuthContext';

const PrivateRoutes = () => {
  const { authTokens } = useContext(AuthContext);

  return (
    authTokens?<Outlet/>:<Navigate to='/login'/>
  );
};

export default PrivateRoutes;