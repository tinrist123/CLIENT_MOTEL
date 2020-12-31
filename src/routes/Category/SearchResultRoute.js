import React from "react";
import { ViewMoreRoom, SearchResult } from "../../pages";
import { Route } from "react-router-dom";

function SearchResultRoute() {
  return (
    <div>
      <Route
        exact
        path="/search/view-all/new-rooms/"
        component={() => <ViewMoreRoom type={"new-rooms"} />}
      />
      <Route
        exact
        path="/search/view-all/confirmed-room/"
        component={() => <ViewMoreRoom type={"confirmed-room"} />}
      />
      <Route exact path="/search/rooms/result/" component={SearchResult} />
    </div>
  );
}

export default SearchResultRoute;
