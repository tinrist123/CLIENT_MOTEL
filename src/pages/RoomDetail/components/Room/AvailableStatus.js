import React from "react";
import HeadingIcon from "../Atom/HeadingIcon";
import ExclamationIcon from "../../../../assets/images/icons/common/ExclamationIcon";
import "./AvailableStatus.scss";
import DescriptionBox from "../AvailableStatus/DescriptionBox";
import { DetectDes_AvailableBox } from "../../../../helpers";
function AvailableStatus(props) {
  const { number_vacancy } = props;
  let listNumber = DetectDes_AvailableBox(number_vacancy);
  return (
    <div className="information_room_detail">
      <HeadingIcon
        nameTitle={"Thông tin phòng"}
        iconComponent={
          <ExclamationIcon sizeIcon={{ height: "32px", width: "32px" }} />
        }
      />
      <p className="title_name">Sức chứa</p>
      {number_vacancy >= 4 && (
        <div className="description_capacity">
          <DescriptionBox text={"Rộng"} numberMember={listNumber[0]} type={0} />
          <DescriptionBox text={"Vừa"} numberMember={listNumber[1]} type={1} />
          <DescriptionBox text={"Chật"} numberMember={listNumber[2]} type={2} />
        </div>
      )}
    </div>
  );
}

export default AvailableStatus;
