import React from "react";
import "./RemainImageNumber.scss";
function RemainImageNumber(props) {
  const { numberRemain } = props;
  return (
    <div className="remain_number">
      <span>{numberRemain}+</span>
    </div>
  );
}

export default RemainImageNumber;
