import React, { useState } from "react";
import "./ListSexData.scss";
import { ListView } from "../../index";
import Constant from "../../../../../common/Constant";
import { HeadingDropdown } from "../../index";

function ListSexData() {
  const [activeDropdown, setActiveDropdown] = useState(false);

  function ToggleDropdown(statusDropdown) {
    setActiveDropdown(statusDropdown);
  }

  return (
    <div className="list_sex_data">
      <HeadingDropdown
        title_filter={"Giới Tính"}
        activeDropdown={(statusDropdown) => ToggleDropdown(statusDropdown)}
      />
      <ListView
        listData={Constant.sex}
        isActiveDropdown={activeDropdown}
        heightSetting={"120px"}
        typeDispatch={"sex_allowed"}
      />
    </div>
  );
}

export default ListSexData;
