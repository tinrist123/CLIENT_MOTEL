import React from "react";
import "./MoreButton.scss";

function MoreButton(props) {
  const { actionClick, text } = props;
  return (
    <div className="more_button">
      <button>{text}</button>
    </div>
  );
}

export default MoreButton;
