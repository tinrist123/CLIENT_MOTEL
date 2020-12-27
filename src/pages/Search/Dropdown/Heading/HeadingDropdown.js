import React, { useState } from "react";
import "./HeadingDropdown.scss";
import { CaretDownIcon } from "../../../../assets/images/icons";

function HeadingDropdown(props) {
  const { activeDropdown } = props;
  const [rotateCaret, setRotateCaret] = useState(true);

  const { title_filter } = props;
  return (
    <div className="filter_heading">
      <div className="title_filter">
        <p>{title_filter}</p>
      </div>
      <div
        className={`caret_down_icon  ${rotateCaret && "rotate_90deg"}`}
        onClick={() => {
          activeDropdown(rotateCaret);
          setRotateCaret(!rotateCaret);
        }}
      >
        <CaretDownIcon />
      </div>
    </div>
  );
}

export default HeadingDropdown;
