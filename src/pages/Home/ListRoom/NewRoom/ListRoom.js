import React, { useState, useEffect } from "react";
import "./ListRoom.scss";
import {
  RoomItemH,
  WidgetHeading,
  ItemLoadingH,
  NoContent,
} from "../../../../components/index";
import MoreButton from "../Atom/MoreButton";
import { axiosData } from "../../../../services/TinNgoServices";
import Constant from "../../../../common/Constant";

function ListRoom(props) {
  const { moreBtn } = props;
  const [loading, setLoading] = useState(true);
  const [dataRooms, setDataRooms] = useState([]);

  useEffect(async () => {
    try {
      let response = await axiosData(`${Constant.url}/motel/all`);
      if (response) {
        setDataRooms(response.data);
        setLoading(false);
      }
    } catch (error) {
      setDataRooms([]);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <ItemLoadingH />;
  }
  if (!dataRooms || dataRooms.success === 0) {
    return <NoContent />;
  }

  const allRooms = dataRooms.data;
  return (
    <div className="list_new_room share_style">
      <WidgetHeading
        Text={"Phòng mới nhất"}
        styleComponent={{ paddingBottom: "4.8rem", backgroundColor: "#ffffff" }}
        viewAllText={moreBtn !== undefined ? moreBtn : true}
        pathLink={"/search/view-all/new-rooms"}
      />
      {allRooms.map((room) => {
        return <RoomItemH data={room} />;
      })}
      <MoreButton text={"Xem tất cả"} />
    </div>
  );
}

export default ListRoom;
