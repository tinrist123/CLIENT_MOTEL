import React from "react";
import "./DetailRoomLoading.scss";

function DetailRoomLoading() {
  return (
    <div className="container">
      <div className="card">
        <div className="card__image loading"></div>
        <div className="card__title loading"></div>
        <div className="card__description loading"></div>
      </div>
    </div>
  );
}

export default DetailRoomLoading;
