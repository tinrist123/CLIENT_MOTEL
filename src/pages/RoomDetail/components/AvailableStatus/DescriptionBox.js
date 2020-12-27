import React from "react";
import "./DescriptionBox.scss";

const small_box_color = "#0f88a1";
const medium_box_color = "#1edb4c";
const large_box_color = "#ffab1d";

function DescriptionBox(props) {
  const { text, numberMember, type } = props;

  let detectColorBox =
    type === 0
      ? small_box_color
      : type === 1
      ? medium_box_color
      : large_box_color;

  return (
    <div className="box_describe_num_member">
      <p className="description_text">{text}</p>
      <div
        className="box_number_member"
        style={{ backgroundColor: detectColorBox }}
      >
        <span className="number">{numberMember} người</span>
      </div>
    </div>
  );
}

export default DescriptionBox;
