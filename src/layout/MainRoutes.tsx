import React, { Children, useMemo } from "react";
import Helmet from "react-helmet";
import { Route } from "react-router-dom";
import { IRoute } from "router/config";
import { businessRouteList } from "router/utils";

function renderRoute(route: IRoute) {
  const title = "你好";
  const { component: Component } = route;

  return (
    <Route
      key={route.path}
      exact={route.path !== "*"}
      path={route.path}
      // render={props => (
      //   <Component {...props} />
      // )}
    ></Route>
  );
}

function renderRouteList(): React.ReactNode[] {
  console.log("businessRouteList:", businessRouteList);
  const result: React.ReactNode[] = [];

  businessRouteList.forEach((child: IRoute) => {
    console.log("child:", child);
    result.push(renderRoute(child));
  });
  console.log("renderRouteList:", result);
  return result;
}

function MainRoutes() {
  const routeList = useMemo(() => renderRouteList(), []);

  return <Route>{routeList}</Route>;
}

export default MainRoutes;
