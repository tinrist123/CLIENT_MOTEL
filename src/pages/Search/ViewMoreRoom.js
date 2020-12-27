import React from "react";
import "./ViewMoreRoom.scss";
import { HeadingDropdown, ListView, FilterFeature } from "./Dropdown";
import { ListRoomPagination } from "../../components";

function ViewMoreRoom(props) {
  const { type } = props;

  function detectQuery(typeRoom) {
    if (type === "confirmed-room") {
      return { isConfirmed: true };
    }
  }

  return (
    <div className="view_more_result">
      <div className="container">
        <div className="row">
          <FilterFeature />
          <ListRoomPagination queryOption={detectQuery(type)} />
        </div>
      </div>
    </div>
  );
}

export default ViewMoreRoom;
