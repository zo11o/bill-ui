import React from "react";
import { IRoute } from "../../config";

const Home = React.lazy(
  () => import(/* webpackChunkName: "Home" */ "views/home")
);
const HomeDetail = React.lazy(
  () => import(/* webpackChunkName: "HomeDetail" */ "views/home/detail")
);

const route: IRoute = {
  path: "/home",
  component: Home,
  meta: {
    title: "首页",
    icon: "home",
  },
  redirect: "/home/intro",
  children: [
    {
      path: "/home/detail",
      component: HomeDetail,
      meta: {
        title: "总览",
      },
    },
  ],
};
export default route;
