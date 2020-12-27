import React from "react";
import "./CardDistrict.scss";
import { Link } from "react-router-dom";

function CardDistrict(props) {
  const { districtName, imgUrl, code } = props;
  return (
    <Link to={`/search/rooms/result?district_code=${code}`}>
      <div
        className="cardDistrict "
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="bottomDarkLine">
          <span className="name_district">{districtName}</span>
        </div>
      </div>
    </Link>
  );
}

export default CardDistrict;
