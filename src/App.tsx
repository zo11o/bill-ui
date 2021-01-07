import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import config from "config";
import "styles/index.scss";

function App() {
  return (
    <Suspense fallback={"加载中"}>
      <Router basename={config.BASENAME}>
        <Switch></Switch>
      </Router>
    </Suspense>
  );
}

export default App;
