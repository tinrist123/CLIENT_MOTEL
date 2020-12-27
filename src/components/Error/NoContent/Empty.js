import React from "react";
import "./Empty.scss";

function Empty() {
  return (
    <div className="empty_state">
      <i className="ion-sad-outline"></i>
      <h3 className="">No posts</h3>
      <p>There have been no posts in this section yet</p>
      <button>Call to action</button>
    </div>
  );
}

export default Empty;
