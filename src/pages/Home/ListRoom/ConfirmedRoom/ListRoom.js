import React, { useEffect, useState } from "react";
import "./ListRoom.scss";
import {
  RoomItemV,
  WidgetHeading,
  ItemLoadingV,
  NoContent,
} from "../../../../components/index";
import MoreButton from "../Atom/MoreButton";
import { fetchData } from "../../../../services/TinNgoServices";
import Constant from "../../../../common/Constant";
function ListRoom() {
  const [loading, setLoading] = useState(true);
  const [allConfirmedRoom, setAllConfirmedRoom] = useState([]);

  useEffect(async () => {
    let response = await fetchData(`${Constant.url}/motel/isConfirm`);
    if (response) {
      setLoading(false);
      setAllConfirmedRoom(response);
    }
  }, []);

  if (loading) {
    return <ItemLoadingV />;
  }

  if (allConfirmedRoom.success !== 1) {
    return <NoContent />;
  }

  const { data } = allConfirmedRoom;

  return (
    <div className="list_confirmed_room">
      <WidgetHeading
        Text={"Đã xác thực"}
        styleComponent={{
          padding: " 0 3.2rem 3.2rem 3.2rem ",
          backgroundColor: "#ffffff",
        }}
        viewAllText={true}
        pathLink={"/search/view-all/new-rooms"}
      />
      <div className="list_confirmed_room_card">
        {data.map((room) => {
          return <RoomItemV data={room} />;
        })}
      </div>
      <MoreButton text={"Xem tất cả"} />
    </div>
  );
}

export default ListRoom;
