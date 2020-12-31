import React, { useState, useEffect } from "react";
import "./CustomSelection.scss";

function CustomSelection(props) {
  const { optionName, optionData, changeId, id, name } = props;

  function handleChange(e) {
    changeId(e.target.value);
  }
  // onChange={(e) => handleChange(e)}
  return (
    <div class="custom_selection">
      <div class="select-field">
        <p>
          <label class="form-label">{optionName}</label>
        </p>
        <select name="slct" id="slct">
          {optionData.map((district) => {
            return (
              <option value={district.district_id}>
                {district.district_name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default CustomSelection;
