import React from "react";
import "./TextColDetail.scss";
function TextColDetail(props) {
  const { title_name, title_value, styleComponent, styleValue } = props;

  return (
    <div className="information_text_col" style={styleComponent}>
      <span className="title_name">{title_name}</span>
      <span style={styleValue} className="title_value">
        {title_value}
      </span>
    </div>
  );
}

export default TextColDetail;
