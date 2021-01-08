import React from "react";
import { IRoute } from "./config";
import system from "./routers/system";
import home from "./routers/home";
console.log("home:", home);
const routes: IRoute[] = [
  system,
  {
    path: "/",
    component: React.lazy(() => import("layout")),
    meta: {
      title: "系统",
    },
    redirect: "/home/intro",
    children: [home],
  },
];

export default routes;
