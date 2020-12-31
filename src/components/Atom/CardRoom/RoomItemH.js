import React from "react";
import "./RoomItemH.scss";
import TextIcon from "../TextIcon";
import BigPrice from "../../Atom/TextBlock/BigPrice";
import {
  HomeIcon,
  RulerIcon,
  LocationIcon,
  AllSexIcon,
} from "../../../assets/images/icons";
import { FormatMoneyByCateMotel } from "../../../helpers";

import { Link } from "react-router-dom";

function RoomItemH(props) {
  const isConfirmedIcon = require(`../../../assets/images/icons/confirmed/confirmed.png`);
  const {
    square,
    imgUrl_list,
    isConfirmed,
    name_motel,
    room_price,
    _id,
    exact_room_address,
    motel_category: { room_type, cate_name },
    sex_allowed,
  } = props.data;

  const { showingMoney, typeMoney, type } = FormatMoneyByCateMotel(
    room_type,
    room_price
  );

  return (
    <div className="card_room_horizontal">
      <Link to={`/room/${_id}`} className="room_item_h">
        <div className="room_img">
          <div className="img">
            <img src={imgUrl_list[0]} alt="" />
            {isConfirmed && (
              <div className="confirmed_room">
                <img src={isConfirmedIcon.default} />
              </div>
            )}
          </div>
        </div>
        <div className="information_detail_room">
          <div className="title">
            <p className="room_title">{name_motel}</p>
          </div>
          <div className="information">
            <div className="detail_information">
              <div className="cate_room">
                <TextIcon
                  iconComponent={<HomeIcon />}
                  Text={cate_name}
                  styleComponent={{ marginBottom: "1.6rem" }}
                  styleTextName={"text_information"}
                />
              </div>
              <div
                className="crucial_information"
                style={{ marginBottom: "1.6rem" }}
              >
                <TextIcon
                  iconComponent={<AllSexIcon />}
                  Text={
                    sex_allowed === "any"
                      ? "Nam & Nữ"
                      : sex_allowed === "male"
                      ? "Nam"
                      : "Nữ"
                  }
                  styleTextName={"text_information"}
                  styleComponent={{ marginRight: "3.2rem" }}
                />
                <TextIcon
                  iconComponent={<RulerIcon />}
                  Text={square}
                  styleTextName={"text_information"}
                />
              </div>
              <div className="address">
                <TextIcon
                  iconComponent={<LocationIcon />}
                  Text={exact_room_address}
                  styleTextName={"text_information"}
                />
              </div>
            </div>
            <div className="price_room">
              <BigPrice
                Price={showingMoney}
                directionColumn={true}
                styleName={"big_price_block"}
                currencyPerRoom={typeMoney}
                currencyType={type}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RoomItemH;
