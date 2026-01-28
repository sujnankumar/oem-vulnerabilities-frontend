import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('access_token');
  const location = useLocation();

  if (!token) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export const AdminRoute = ({ children }) => {
  const token = localStorage.getItem('access_token');
  const userStr = localStorage.getItem('user');
  const location = useLocation();
  
  let user = null;
  try {
    user = JSON.parse(userStr);
  } catch (e) {
    user = null;
  }

  if (!token || !user || !user.is_admin) {
    // Redirect to home if not admin (or a 403 page)
    return <Navigate to="/" replace />;
  }

  return children;
};
