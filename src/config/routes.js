/* @flow */
import React from "react";
import { Route, IndexRoute } from "react-router";
import { ROUTE_NAME_404_NOT_FOUND } from "gluestick-shared";

import MasterLayout from "components/MasterLayout";
import HomeApp from "containers/HomeApp";
import NoMatchApp from "containers/NoMatchApp";
import Todos from "containers/Todos";
import LoginContainer from "containers/LoginContainer";


export default function routes (/*store:Object*/) {
  return (
    <Route name="app" component={MasterLayout} path="/">
      <IndexRoute name="login" component={LoginContainer} />
      <Route name="todos" component={Todos} path="/todos" />
      <Route name={ROUTE_NAME_404_NOT_FOUND} path="*" component={NoMatchApp}/>
    </Route>
  );
}

