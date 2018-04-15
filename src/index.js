import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import routes from "./routes";

const Root = () => {
  const routeComponents = routes.map(({ path, component, exact }, key) => {
    return exact && exact === true ? (
      <Route exact path={path} component={component} key={key} />
    ) : (
      <Route path={path} component={component} key={key} />
    );
  });
  return (
    <BrowserRouter>
      <Switch>{routeComponents}</Switch>
    </BrowserRouter>
  );
};

render(<Root />, document.getElementById("root"));
