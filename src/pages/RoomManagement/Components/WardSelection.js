import React, { useState, useEffect } from "react";
import "./WardSelection.scss";
import CustomSelection from "./Atom/CustomSelection";
import { fetchData } from "../../../services/TinNgoServices";

function WardSelection(props) {
  const { changeIdWard, idDistrict } = props;
  const [wardList, setWardList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      let response = await fetchData(
        "https://vapi.vnappmob.com/api/province/ward/" + idDistrict
      );
      if (response) {
        setWardList(response.results);
        setLoading(false);
      }
    } catch (error) {
      setWardList([]);
      setLoading(false);
    }
  }, []);

  if (loading) return <div>loading</div>;

  console.log(wardList);

  const { ward_id, ward_name } = wardList;

  let dataJson = {
    id: ward_id,
    name: ward_name,
  };

  return (
    <div className="list_ward_selection">
      {
        <CustomSelection
          optionName={"Phường"}
          optionData={wardList}
          changeId={changeIdWard}
        />
      }
    </div>
  );
}

export default WardSelection;
