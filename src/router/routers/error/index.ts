import React from 'react';
import type { IRoute } from 'router/config';

const Error404 = React.lazy(() => import(/* webpackChunkName: "error-404" */ 'views/error/404'));

const Error403 = React.lazy(() => import(/* webpackChunkName: "error-403" */ 'views/error/403'));

export const errorRedirect: IRoute = {
  path: '/*',
  meta: {
    title: '错误页面',
  },
  redirect: '/error/404',
  component: Error404,
};

const route: IRoute = {
  path: '/error',
  component: Error404,
  meta: {
    title: '错误页面',
  },
  redirect: '/error/404',
  children: [
    {
      path: '/error/404',
      auth: false,
      component: Error404,
      meta: {
        title: '页面不存在',
      },
    },
    {
      path: '/error/403',
      auth: false,
      component: Error403,
      meta: {
        title: '无访问权限',
      },
    },
  ],
};

export default route;
