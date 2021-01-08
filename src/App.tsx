import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import config from "config";
import "styles/index.scss";
import Spin from "components/spin";
import { IRoute } from "./router/config";
import { layoutRouteList } from "router/utils";
console.log("layoutRouteList", layoutRouteList);

function App() {
  return (
    <Suspense fallback={<Spin />}>
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
