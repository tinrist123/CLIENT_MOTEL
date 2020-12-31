import React, { useState, useEffect } from "react";
import "./DistrictSelection.scss";
import CustomSelection from "./Atom/CustomSelection";
import { fetchData } from "../../../services/TinNgoServices";

function DistrictSelection(props) {
  const { provinceId, changeIdDistrict } = props;
  const [district, setDistrict] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      let response = await fetchData(
        "https://vapi.vnappmob.com/api/province/district/" + provinceId
      );
      if (response) {
        setDistrict(response.results);
        setLoading(false);
      }
    } catch (error) {
      setDistrict([]);
      setLoading(false);
    }
  }, []);

  if (loading) return <div>loading</div>;

  return (
    <div className="list_district_selection">
      {
        <CustomSelection
          optionName={"Quận"}
          optionData={district}
          changeId={changeIdDistrict}
        />
      }
    </div>
  );
}

export default DistrictSelection;
