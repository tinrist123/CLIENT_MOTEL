import React, { useState, useEffect } from "react";
import "./ListCategoryData.scss";
import { fetchData } from "../../../../../services/TinNgoServices";
import { ListView } from "../../index";
import Constant from "../../../../../common/Constant";
import { HeadingDropdown } from "../../index";

function ListCategoryData() {
  const [activeDropdown, setActiveDropdown] = useState(false);

  function ToggleDropdown(statusDropdown) {
    setActiveDropdown(statusDropdown);
  }

  return (
    <div className="list_category_motel_filter">
      <HeadingDropdown
        title_filter={"Loại phòng"}
        activeDropdown={(statusDropdown) => ToggleDropdown(statusDropdown)}
      />
      <ListView
        listData={Constant.category}
        isActiveDropdown={activeDropdown}
        heightSetting={"220px"}
        typeDispatch={"category"}
      />
    </div>
  );
}

export default ListCategoryData;
