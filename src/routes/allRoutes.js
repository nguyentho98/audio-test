import React from 'react';
import { Redirect } from 'react-router-dom';
import Login from '../pages/audio/Login';

// Bot builder

const userRoutes = [
  // Bot builder
  // this route should be at the end of all other routes
  { path: '/', exact: true, component: () => <Redirect to="/nlu-data" /> }
];

const authRoutes = [{ path: '/audio', component: Login }];

export { userRoutes, authRoutes };
