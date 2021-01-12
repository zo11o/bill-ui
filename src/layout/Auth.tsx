import React, { memo } from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";
import { IRoute } from "router/config";
import { businessRouteList, formatPathname } from "router/utils";
interface AuthProps extends RouteComponentProps {
  route: IRoute;
  children: React.ReactNode;
}

function checkAuth(location: RouteComponentProps["location"]): boolean {
  const route = businessRouteList.find(
    (child) => child.path === formatPathname(location.pathname)
  );
  console.log(route);
  if (!route) {
    return true;
  }

  if (route.redirect) {
    return true;
  }

  if (route.auth === false) {
    return true;
  }

  return true;
}

function Auth(props: AuthProps) {
  console.log(props);

  if (!checkAuth(props.location)) {
    return <Redirect to="/error/403" push />;
  }

  if (props.route.redirect) {
    return <Redirect to={props.route.redirect!} push />;
  }

  return <>{props.children}</>;
}

export default memo(Auth);
