import React from "react";
import "./TextIcon.scss";

function TextIcon(props) {
  const {
    iconComponent,
    Text,
    styleTextName,
    sizeIcon,
    styleComponent,
    styleTitleName,
  } = props;
  return (
    <div className={`text_icon`} style={styleComponent}>
      {!!iconComponent && iconComponent}
      <span style={styleTitleName} className={styleTextName}>
        {Text}
      </span>
    </div>
  );
}

export default TextIcon;
