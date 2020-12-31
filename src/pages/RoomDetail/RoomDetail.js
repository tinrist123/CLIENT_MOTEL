import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RoomDetail.scss";
import "../../assets/styles/common.scss";
import { fetchWithTimeout } from "../../services/TinNgoServices";
import {
  ImageRoom,
  TagAddress,
  InformationRoom,
  HostDetail,
  UtilitiesInformation,
  AvailableStatus,
  Description,
} from "./components";
import Constant from "../../common/Constant";

import { DetailRoomLoading, NoContent } from "../../components";
function RoomDetail(props) {
  const [roomData, setRoomData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(async () => {
    try {
      let response = await fetchWithTimeout(
        `${Constant.url}/motel/detail/${id}`,
        {
          timeout: 6000,
        }
      ).then((response) => response.json());
      if (response) {
        setRoomData(response);
        setLoading(false);
      }
    } catch (error) {
      setRoomData([]);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <DetailRoomLoading />;
  }

  if (roomData.length === 0) {
    return <NoContent />;
  }

  const {
    util_list,
    id_motel_host,
    number_vacancies_available_in_room,
    imgUrl_list,
  } = roomData.data;

  return (
    <div className="room_detail">
      <div className="container">
        <ImageRoom gallery_img={imgUrl_list} />
        <TagAddress data={roomData.data} />
        <div className="row">
          <div className="left">
            <InformationRoom data={roomData.data} />
            <UtilitiesInformation util_list={util_list} />
            <AvailableStatus
              number_vacancy={number_vacancies_available_in_room}
            />
            <Description descriptionHTML={roomData.data.more_description} />
          </div>
          <div className="right">
            <HostDetail host_data={id_motel_host} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomDetail;
