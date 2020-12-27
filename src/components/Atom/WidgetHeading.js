import React from "react";
import { Link } from "react-router-dom";
import TextIcon from "./TextIcon";
import "./WidgetHeading.scss";

function Title(props) {
  const {
    styleTitleName,
    Text,
    bgColor,
    viewAllText,
    styleComponent,
    iconComponent,
    pathLink,
  } = props;
  return (
    <div className="title_block" style={styleComponent}>
      <TextIcon
        Text={Text}
        styleTextName={`title_text`}
        iconComponent={iconComponent}
        styleTitleName={styleTitleName}
      />
      <Link to={pathLink}>
        {viewAllText && (
          <div className={"box_view_more"}>
            <span>Xem tất cả</span>
          </div>
        )}
      </Link>
    </div>
  );
}

export default Title;
