import React from "react";
import ListConfirmedRoom from "./ConfirmedRoom/ListRoom";
import ListNewRoom from "./NewRoom/ListRoom";
import "./SuggestRoom.scss";

function SuggestRoom() {
  return (
    <div className="suggest_room">
      <div className="list_new_room_data">
        <ListNewRoom />
      </div>
      <div className="list_confirmed_room_data">
        <ListConfirmedRoom />
      </div>
    </div>
  );
}

export default SuggestRoom;
