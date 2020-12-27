import React from "react";
import "./FilterFeature.scss";
import { ListUtilityData, ListCategoryData, ListSexData } from "./index";
import { HeadingFilter } from "../index";
import MoreButton from "../../Home/ListRoom/Atom/MoreButton";
import { useSelector } from "react-redux";
function FilterFeature() {
  const filters = useSelector((state) => state.filters);
  console.log(filters);
  return (
    <div className="filter_feature">
      <HeadingFilter />
      <ListUtilityData />
      <ListCategoryData />
      <ListSexData />
      <MoreButton text={"Áp dụng"} />
    </div>
  );
}

export default FilterFeature;
