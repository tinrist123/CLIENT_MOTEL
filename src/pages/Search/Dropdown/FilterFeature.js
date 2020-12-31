import React from "react";
import "./FilterFeature.scss";
import { ListUtilityData, ListCategoryData, ListSexData } from "./index";
import { HeadingFilter } from "../index";
import MoreButton from "../../Home/ListRoom/Atom/MoreButton";
import { useSelector } from "react-redux";
function FilterFeature() {
  const filter = useSelector((state) => state.filters);
  console.log(filter);
  return (
    <div className="filter_feature">
      <HeadingFilter />
      <ListUtilityData />
      <ListCategoryData />
      <ListSexData />
      <MoreButton text={"Reset"} />
    </div>
  );
}

export default FilterFeature;
