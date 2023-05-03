import { RouteObject, createBrowserRouter } from 'react-router-dom';
import React from 'react';

const routes: Array<RouteObject> = [
  {
    path: '/',
    Component: React.lazy(() => import('@/views/main/index')),
  }
]

const router = createBrowserRouter(routes);

export default router;