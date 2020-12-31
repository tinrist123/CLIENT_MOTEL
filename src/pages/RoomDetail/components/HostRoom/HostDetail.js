import React from "react";
import HeadingIcon from "../Atom/HeadingIcon";
import "./HostDetail.scss";
import { UserIcon } from "../../../../assets/images/icons";
import { FormatDateTime } from "../../../../helpers";
function HostDetail(props) {
  const {
    host_data: {
      first_name,
      last_name,
      img_url_avatar,
      phone_number,
      created_date,
    },
  } = props;

  return (
    <div className="information_host_room border_radius_2rem">
      <HeadingIcon
        nameTitle={"Thông tin chủ phòng"}
        iconComponent={<UserIcon />}
      />
      <div className="detail_host">
        <div className="detail">
          <div className="avatar">
            <img src={img_url_avatar} />
          </div>
          <div className="information">
            <div className="name">
              <span name="name_host">{`${first_name} ${last_name}`}</span>
            </div>
            <div className="phone_number">
              <span>SĐT: 035231212</span>
            </div>
          </div>
        </div>
        <div className="datetime">
          <span>Ngày đăng: {FormatDateTime(created_date)}</span>
        </div>
      </div>
    </div>
  );
}

export default HostDetail;
