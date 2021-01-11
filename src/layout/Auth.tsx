import React, { memo } from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";
import { IRoute } from "router/config";
interface AuthProps extends RouteComponentProps {
  route: IRoute;
  children: React.ReactNode;
}

function Auth(props: AuthProps) {
  console.log(props);
  if (props.route.redirect) {
    console.log("props.route.redirect::", props.route.redirect);
    return <Redirect to={props.route.redirect!} push />;
  }

  return <>{props.children}</>;
}

export default memo(Auth);
