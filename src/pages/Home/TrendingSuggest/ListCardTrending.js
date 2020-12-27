import React, { useState, useEffect } from "react";
import { WidgetHeading, CardDistrict } from "../../../components/index";
import "./ListCardTrending.scss";
import Constant from "../../../common/Constant";

function ListCardTrending() {
  return (
    <div className="trending_research">
      <WidgetHeading
        Text={"Xu hướng tìm kiếm"}
        styleTitleName={{ fontSize: "3.2rem" }}
      />
      <div className="list_suggest_district">
        {Constant.city.district.map((district) => {
          return (
            <CardDistrict
              districtName={district.name}
              imgUrl={district.imgUrl}
              code={district.code}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ListCardTrending;
