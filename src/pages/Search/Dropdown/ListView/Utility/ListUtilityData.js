import React, { useState } from "react";
import "./ListUtilityData.scss";
import { fetchData } from "../../../../../services/TinNgoServices";
import { ListViewIcon } from "../../index";
import Constant from "../../../../../common/Constant";
import { HeadingDropdown } from "../../index";

function ListUtilityData(props) {
  const [activeDropdown, setActiveDropdown] = useState(false);

  function ToggleDropdown(statusDropdown) {
    setActiveDropdown(statusDropdown);
  }

  return (
    <div className="list_utility_filter">
      <HeadingDropdown
        title_filter={"Tien Ich"}
        activeDropdown={(statusDropdown) => ToggleDropdown(statusDropdown)}
      />
      <ListViewIcon
        listData={Constant.utilities}
        isActiveDropdown={activeDropdown}
        typeDispatch={"utility"}
      />
    </div>
  );
}

export default ListUtilityData;
