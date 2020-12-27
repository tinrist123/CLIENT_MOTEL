import React from "react";
import HeadingIcon from "../Atom/HeadingIcon";
import "./Description.scss";
import { DescriptionIcon } from "../../../../assets/images/icons";
function Description(props) {
  const { descriptionHTML } = props;
  return (
    <div className="information_room_detail">
      <HeadingIcon
        nameTitle={"Mô tả thêm"}
        iconComponent={
          <DescriptionIcon sizeIcon={{ height: "32px", width: "32px" }} />
        }
      />
      <div className="description">
        <pre className="description_content">{descriptionHTML}</pre>
      </div>
    </div>
  );
}

export default Description;
