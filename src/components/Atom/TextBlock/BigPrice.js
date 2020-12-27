import React from "react";
import "./BigPrice.scss";
function BigTextPrice(props) {
  const { Price, styleName, currencyPerRoom, directionColumn } = props;

  const blockStyleName = `price_text${
    directionColumn ? " directionColumn" : ""
  }`;
  const name = blockStyleName + styleName ? styleName : "";
  return (
    <div className={blockStyleName + " " + name}>
      <span
        className={"price"}
        style={
          !directionColumn ? { fontSize: "1.6rem", lineHeight: "2.4rem" } : null
        }
      >
        {Price}
      </span>
      <span className={"text_currency_room"}>
        {currencyPerRoom ? currencyPerRoom : " tr/phòng"}
      </span>
    </div>
  );
}
export default BigTextPrice;
