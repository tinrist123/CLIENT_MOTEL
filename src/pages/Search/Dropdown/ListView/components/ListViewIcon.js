import React from "react";
import "./ListView.scss";
import CheckBoxIcon from "../../../../../components/Atom/SearchFilter/CheckBoxIcon";
import { GetUrlImgUtil } from "../../../../../helpers";
import Constant from "../../../../../common/Constant";

function ListView(props) {
  const { listData, isActiveDropdown, typeDispatch } = props;
  const resData =
    typeDispatch === "utility" ? Constant.utilities : Constant.category;
  return (
    <div
      className={`list_view dropdown_animation${
        isActiveDropdown ? " active_dropdown" : ""
      }`}
    >
      {listData.map((data) => {
        const IconComponent = GetUrlImgUtil(data.type, resData).url_icon
          .default;
        return (
          <CheckBoxIcon
            IconComponent={
              <IconComponent sizeIcon={{ height: "20px", width: "20px" }} />
            }
            text={data.name}
            id={data._id || data.type}
            typeDispatch={typeDispatch}
          />
        );
      })}
    </div>
  );
}

export default ListView;
