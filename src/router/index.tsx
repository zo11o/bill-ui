import React from 'react';
import type { IRoute } from './config';
import system from './routers/system';
import home from './routers/home';
import uc from './routers/uc';
import error, { errorRedirect } from './routers/error';

// 在这个数组加业务路由
const businessRouteLists: IRoute[] = [home, uc, error];
// 错误页面跳转
businessRouteLists.push(errorRedirect);

const routes: IRoute[] = [
  // 系统路由
  system,
  // 业务路由
  {
    path: '/',
    component: React.lazy(() => import('layout')),
    meta: {
      title: '首页',
    },
    redirect: '/home',
    children: businessRouteLists,
  },
];

export default routes;
