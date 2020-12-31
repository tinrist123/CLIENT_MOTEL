import React from "react";
import "./ListView.scss";
import CheckBoxIcon from "../../../../../components/Atom/SearchFilter/CheckBoxIcon";
function ListView(props) {
  const { listData, isActiveDropdown, heightSetting, typeDispatch } = props;
  return (
    <div
      className={`list_view dropdown_animation${
        isActiveDropdown ? " active_dropdown" : ""
      }`}
      style={{ height: isActiveDropdown && heightSetting }}
    >
      {listData.map((data) => {
        return (
          <CheckBoxIcon
            text={data.name}
            id={data.id}
            typeDispatch={typeDispatch}
          />
        );
      })}
    </div>
  );
}

export default ListView;
