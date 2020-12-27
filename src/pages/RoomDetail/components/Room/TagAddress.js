import React from "react";
import "./TagAddress.scss";
import { CaretRightIcon } from "../../../../assets/images/icons";
function TagAddress(props) {
  const {
    data: { name_motel, full_address },
  } = props;
  const { city, district, streetName } = full_address;
  return (
    <div className="tag_address">
      <p className="room_name_title">{name_motel}</p>
      <div className="tag center_item">
        <span className="city center_item">
          <a href="">{city.text}</a>
          <CaretRightIcon />
        </span>
        <span className="district center_item">
          <a href="">{district.text}</a>
          <CaretRightIcon />
        </span>
        <span className="street_name">{streetName}</span>
      </div>
    </div>
  );
}

export default TagAddress;
