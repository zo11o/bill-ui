import React from "react";
import { IRoute } from "../../config";

const Home = React.lazy(
  () => import(/* webpackChunkName: "Home" */ "views/home")
);
const HomeDetail = React.lazy(
  () => import(/* webpackChunkName: "HomeDetail" */ "views/home/detail")
);
const HomeIntro = React.lazy(
  () => import(/* webpackChunkName: "HomeIntro" */ "views/home/intro")
);

const route: IRoute = {
  path: "/home",
  component: Home,
  meta: {
    title: "首页",
    icon: "home",
  },
  // redirect: "/home/intro",
  children: [
    {
      path: "/home/detail",
      component: HomeDetail,
      meta: {
        title: "首页详情",
      },
    },
    {
      path: "/home/intro",
      component: HomeIntro,
      meta: {
        title: "首页介绍",
      },
    },
  ],
};
export default route;
