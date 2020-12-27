import React, { useState, useEffect } from "react";
import "./SearchResultPagination.scss";
import {
  WidgetHeading,
  RoomItemH,
  ItemLoadingH,
  NoContent,
  PaginationBar,
} from "../../../components";
import { postAxiosPayloadData } from "../../../services/TinNgoServices";
import Constant from "../../../common/Constant";

function SearchResultPagination(props) {
  const { placeDetail, filters, code } = props;
  const [loading, setLoading] = useState(true);
  const [dataRooms, setDataRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(async () => {
    let body = Constant.payload;

    body.current_page = currentPage - 1;
    body.page_number = 7;
    body["place_detail"] = { district_code: code };
    let response = await postAxiosPayloadData(
      `${Constant.url}/motel/search`,
      {},
      body
    );
    if (response) {
      setDataRooms(response);
      setLoading(false);
    } else {
      setDataRooms([]);
      setLoading(false);
    }
  }, [currentPage]);

  function ChangeCurrentPage(numPage) {
    setCurrentPage(numPage);
  }

  if (loading) {
    return <ItemLoadingH />;
  }
  if (!dataRooms || dataRooms.success === 0 || dataRooms.data === 0) {
    return <NoContent />;
  }

  const allRooms = dataRooms.data;
  return (
    <div className="list_room_pagination">
      <WidgetHeading
        Text={"Phòng mới nhất"}
        styleComponent={{ paddingBottom: "4.8rem", backgroundColor: "#ffffff" }}
      />
      {allRooms.map((room) => {
        return <RoomItemH data={room} />;
      })}
      <PaginationBar
        maxPageSize={5}
        currentPage={currentPage}
        ChangeNumPage={(num) => ChangeCurrentPage(num)}
      />
    </div>
  );
}

export default SearchResultPagination;
