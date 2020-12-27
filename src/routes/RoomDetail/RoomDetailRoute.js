import React from "react";
import { Route } from "react-router-dom";
import { RoomDetail } from "../../pages";

function RoomDetailRoute() {
  return <Route exact path="/room/:id" component={RoomDetail} />;
}

export default RoomDetailRoute;
