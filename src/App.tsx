import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import config from 'config';
import Spin from 'components/Spin';
import type { IRoute } from './router/config';
import { layoutRouteList } from 'router/utils';

import 'styles/global.less';
import 'styles/index.less';

function App() {
  return (
    <Suspense fallback={<Spin size="large" className="layout__loading" />}>
      <Router basename={config.BASENAME}>
        <Switch>
          {layoutRouteList.map((route: IRoute) => (
            <Route
              key={config.BASENAME + route.path}
              path={route.path}
              component={route.component}
            ></Route>
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
