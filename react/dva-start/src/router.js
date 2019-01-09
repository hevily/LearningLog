import React from "react";
import { Router, Route, Switch, routerRedux } from "dva/router";
import IndexPage from "./routes/IndexPage";
import Page1 from "./routes/page1/index";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/page1" exact component={Page1} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
