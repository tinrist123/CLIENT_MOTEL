import React from "react";
import "./InformationRoom.scss";
import TextColDetail from "../Atom/TextColDetail";
import HeadingIcon from "../Atom/HeadingIcon";
import HomeIcon from "../../../../assets/images/icons/common/HomeIcon";
import { FormatMoney } from "../../../../helpers";

function InformationRoom(props) {
  const {
    data: {
      room_price,
      square,
      deposit,
      electric_price,
      water_price,
      wifi_cost,
      sex_allowed,
      number_vacancies_available_in_room,
      room_is_shared,
      exact_room_address,
    },
  } = props;

  let textSex_Allowed;
  if (sex_allowed === "any") {
    textSex_Allowed = "Nam hoặc Nữ";
  } else if (sex_allowed === "female") {
    textSex_Allowed = "Nữ";
  } else textSex_Allowed = "Nam";

  let depositPerMonth = parseInt(deposit) / parseInt(room_price);

  if (deposit <= 1) depositPerMonth = deposit;
  if (depositPerMonth <= 1)
    depositPerMonth = `${FormatMoney(deposit, 0, ".", ",")}`;

  return (
    <div className="information_room_detail border_radius_2rem">
      <HeadingIcon
        nameTitle={"Thông tin phòng"}
        iconComponent={
          <HomeIcon sizeIcon={{ height: "32px", width: "32px" }} />
        }
      />
      <div className="list_information">
        {room_price && (
          <TextColDetail
            title_name={"giá phòng"}
            title_value={`${FormatMoney(room_price, 0, ".", ",")} đồng`}
            styleComponent={{ margin: "2.4rem 0 0 0", width: "calc(100%/4)" }}
          />
        )}
        {square && (
          <TextColDetail
            title_name={"diện tích"}
            title_value={square}
            styleComponent={{ margin: "2.4rem 0 0 0", width: "calc(100%/4)" }}
          />
        )}
        {deposit && (
          <TextColDetail
            title_name={"đặt cọc"}
            title_value={`${depositPerMonth} tháng`}
            styleComponent={{ margin: "2.4rem 0 0 0", width: "calc(100%/4)" }}
          />
        )}
        {number_vacancies_available_in_room && (
          <TextColDetail
            title_name={"Sức chứa"}
            title_value={`${number_vacancies_available_in_room} ${textSex_Allowed}`}
            styleComponent={{ margin: "2.4rem 0 0 0", width: "calc(100%/4)" }}
          />
        )}
        {(!!electric_price || electric_price === 0) && (
          <TextColDetail
            title_name={"Điện"}
            title_value={`${FormatMoney(electric_price, 0, ".", ",")} đồng`}
            styleComponent={{ margin: "2.4rem 0 0 0", width: "calc(100%/4)" }}
          />
        )}
        {(!!water_price || water_price === 0) && (
          <TextColDetail
            title_name={"Nước"}
            title_value={`${FormatMoney(water_price, 0, ".", ",")} đồng`}
            styleComponent={{ margin: "2.4rem 0 0 0", width: "calc(100%/4)" }}
          />
        )}
        {(!!wifi_cost || wifi_cost === 0) && (
          <TextColDetail
            title_name={"WIFI"}
            title_value={`${FormatMoney(wifi_cost, 0, ".", ",")} đồng`}
            styleComponent={{ margin: "2.4rem 0 0 0", width: "calc(100%/4)" }}
          />
        )}
        {
          <TextColDetail
            title_name={"Trạng Thái"}
            title_value={
              room_is_shared
                ? `0/${number_vacancies_available_in_room}`
                : "Còn phòng"
            }
            styleComponent={{
              margin: "2.4rem 0 0 0",
              width: "calc(100%/4)",
            }}
            styleValue={{ color: "#1EDB4C" }}
          />
        }
      </div>
      <div className="address_field">
        {
          <TextColDetail
            title_name={"Địa chỉ"}
            title_value={exact_room_address}
            styleComponent={{ margin: "2.4rem 0 0 0", width: "91%" }}
          />
        }
      </div>
    </div>
  );
}

export default InformationRoom;
