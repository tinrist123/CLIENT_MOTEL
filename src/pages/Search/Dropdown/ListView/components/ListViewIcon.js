import React from "react";
import "./ListView.scss";
import CheckBoxIcon from "../../../../../components/Atom/SearchFilter/CheckBoxIcon";

function ListView(props) {
  const { listData, isActiveDropdown, typeDispatch } = props;
  return (
    <div
      className={`list_view dropdown_animation${
        isActiveDropdown ? " active_dropdown" : ""
      }`}
    >
      {listData.map((data) => {
        const IconComponent = data.url_icon.default;
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
