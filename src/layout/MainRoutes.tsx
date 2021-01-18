import React, { useMemo, memo } from 'react';
import Helmet from 'react-helmet';
import { Route } from 'react-router-dom';
import type { IRoute } from 'router/config';
import { businessRouteList, getPageTitle } from 'router/utils';
import Auth from './Auth';
import AsyncRoutes from './AsyncRoutes';
import LayoutNav from 'components/LayoutNav';
import classnames from 'classnames';
import './mainRoutes.less';

function renderRoute(route: IRoute) {
  const title = getPageTitle(businessRouteList);
  const { component: Component } = route;
  return (
    <Route
      key={route.path}
      exact={route.path !== '*'}
      path={route.path}
      render={(props) => (
        <Auth {...props} route={route}>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={title} />
          </Helmet>
          <div
            className={classnames({
              layout__main__body: true,
              'layout__main__body--nav': !!route.meta.navKey,
            })}
          >
            <Component {...props} />
          </div>
          {route.meta.navKey ? (
            <div
              className={classnames({
                layout__main__nav: true,
              })}
            >
              <LayoutNav {...route}></LayoutNav>
            </div>
          ) : (
            ''
          )}
        </Auth>
      )}
    ></Route>
  );
}

function renderRouteList(): React.ReactNode[] {
  const result: React.ReactNode[] = [];
  businessRouteList.forEach((child: IRoute) => {
    result.push(renderRoute(child));
  });
  return result;
}

function MainRoutes() {
  const routeList = useMemo(() => renderRouteList(), []);

  return <AsyncRoutes>{routeList}</AsyncRoutes>;
}

export default memo(MainRoutes);
