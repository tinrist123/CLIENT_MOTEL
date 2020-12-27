import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../../pages";

function HomeRoute() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
    </div>
  );
}

export default HomeRoute;
