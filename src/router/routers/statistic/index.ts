import React from 'react';
import type { IRoute } from '../../config';

const Statistic = React.lazy(() => import(/* webpackChunkName: "statistic" */ 'views/statistic'));
const StatisticDetail = React.lazy(
  () => import(/* webpackChunkName: "statistic-detail" */ 'views/statistic/detail'),
);

const route: IRoute = {
  path: '/statistic',
  component: Statistic,
  meta: {
    title: '统计',
    icon: 'statistic',
    navKey: 2,
  },
  children: [
    {
      path: '/statistic/detail',
      auth: true,
      component: StatisticDetail,
      meta: {
        title: '统计详情',
      },
    },
  ],
};

export default route;
