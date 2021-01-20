import React from 'react';
import type { IRoute } from '../../config';

const UserLayout = React.lazy(
  () => import(/* webpackChunkName: "layout-user" */ 'layout/UserLayout'),
);
const Login = React.lazy(() => import('views/system/login'));

const route: IRoute = {
  path: '/system',
  component: UserLayout,
  meta: {
    title: '系统路由',
  },
  redirect: '/system/login',
  children: [
    {
      path: '/system/login',
      component: Login,
      meta: {
        title: '登录',
      },
    },
    // {
    //   path: '/system/register',
    //   component: React.lazy(() => import('../views/system/register')),
    //   meta: {
    //     title: '注册',
    //   },
    // },
    // {
    //   path: '/system/register-result/:id',
    //   auth: false,
    //   component: React.lazy(() => import('../views/system/registerResult')),
    //   meta: {
    //     title: '注册结果',
    //   },
    // },
    // {
    //   path: '/system/recovery-pwd',
    //   auth: false,
    //   component: React.lazy(() => import('../views/system/recoveryPwd')),
    //   meta: {
    //     title: '重置密码',
    //   },
    // },
  ],
};
export default route;
