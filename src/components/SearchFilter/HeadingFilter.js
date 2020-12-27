import React from "react";
import "./HeadingFilter.scss";

function HeadingFilter(props) {
  const { ApplyFilter } = props;
  return (
    <div className="heading_title">
      <p className="title_name">Bộ lọc</p>
      <div className="apply_button">
        <span className="apply">Áp dụng</span>
      </div>
    </div>
  );
}

export default HeadingFilter;
