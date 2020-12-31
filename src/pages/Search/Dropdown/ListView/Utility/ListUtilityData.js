import React, { useState, useEffect } from "react";
import "./ListUtilityData.scss";
import { fetchData } from "../../../../../services/TinNgoServices";
import { ListViewIcon } from "../../index";
import Constant from "../../../../../common/Constant";
import { HeadingDropdown } from "../../index";

function ListUtilityData(props) {
  const [utilList, setUtilList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [activeDropdown, setActiveDropdown] = useState(false);

  useEffect(async () => {
    try {
      let response = await fetchData(`${Constant.url}/utilities`);
      if (response) {
        setUtilList(response);
        setLoading(false);
      }
    } catch (error) {
      setUtilList([]);
      setLoading(false);
    }
  }, []);

  function ToggleDropdown(statusDropdown) {
    setActiveDropdown(statusDropdown);
  }

  if (loading) return <div>loading</div>;

  return (
    <div className="list_utility_filter">
      <HeadingDropdown
        title_filter={"Tiện ích"}
        activeDropdown={(statusDropdown) => ToggleDropdown(statusDropdown)}
      />
      <ListViewIcon
        listData={utilList}
        isActiveDropdown={activeDropdown}
        typeDispatch={"utility"}
      />
    </div>
  );
}

export default ListUtilityData;
