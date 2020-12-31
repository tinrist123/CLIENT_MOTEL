import React from "react";
import { Route } from "react-router-dom";
import { Home, Register, Login, CreateRoom } from "../../pages";

function HomeRoute() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/login" component={Login} />
      <Route exact path="/home/register" component={Register} />
      <Route exact path="/home/create/room" component={CreateRoom} />
    </div>
  );
}

export default HomeRoute;
