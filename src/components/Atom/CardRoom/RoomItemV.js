import React from "react";
import "./RoomItemV.scss";

import BigPrice from "../../Atom/TextBlock/BigPrice";
import { Link } from "react-router-dom";
import { FormatMoneyByCateMotel } from "../../../helpers";

function RoomItemV(props) {
  const {
    imgUrl_list,
    name_motel,
    full_address,
    _id,
    room_price,
    motel_category: { room_type, cate_name },
  } = props.data;

  const { district } = full_address;

  const { showingMoney, typeMoney, type } = FormatMoneyByCateMotel(
    room_type,
    room_price
  );

  const isConfirmedIcon = require(`../../../assets/images/icons/confirmed/confirmed.png`);

  return (
    <div className="room_item_card">
      <Link to={`/room/${_id}`} className="room_item">
        <div
          className="room_img"
          style={{
            backgroundImage: `url('${imgUrl_list[0]}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="confirmed_room">
            <img src={isConfirmedIcon.default} />
          </div>
        </div>
        <div className="title_room_name">
          <p className="room_title">{name_motel}</p>
        </div>
        <div className="information_room_v">
          <div className="district">
            <p className="district_name">{district.text}</p>
          </div>
          <div className="price_room">
            <BigPrice
              Price={showingMoney}
              currencyPerRoom={typeMoney}
              currencyType={type}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RoomItemV;
