import React from 'react';
import type { IRoute } from '../../config';

const Uc = React.lazy(() => import(/* webpackChunkName: "uc" */ 'views/uc'));
const UcDetail = React.lazy(() => import(/* webpackChunkName: "uc-detail" */ 'views/uc/detail'));

const route: IRoute = {
  path: '/uc',
  component: Uc,
  meta: {
    title: '我的',
    icon: 'user',
    navKey: 3,
  },
  // redirect: "/home/intro",
  children: [
    {
      path: '/uc/detail',
      auth: true,
      component: UcDetail,
      meta: {
        title: '用户详情',
      },
    },
  ],
};

export default route;
