import React, { memo } from 'react';
import type { RouteComponentProps } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import type { IRoute } from 'router/config';
import { businessRouteList, formatPathname } from 'router/utils';

type AuthProps = {
  route: IRoute;
  children: React.ReactNode;
} & RouteComponentProps;

function checkAuth(location: RouteComponentProps['location']): boolean {
  const route = businessRouteList.find((child) => child.path === formatPathname(location.pathname));
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
  if (!checkAuth(props.location)) {
    return <Redirect to="/error/403" push />;
  }

  if (props.route.redirect) {
    return <Redirect to={props.route.redirect!} />;
  }

  return <>{props.children}</>;
}

export default memo(Auth);
