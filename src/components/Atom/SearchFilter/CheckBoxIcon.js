import React from "react";
import "./CheckBoxIcon.scss";
import { TextIcon } from "../../index";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  utilityAdded,
  motelCategoryAdded,
  sex_allowedAdded,
  utilityRemoved,
} from "../../../Redux/features/Filter/FilterSlice";
import { useSelector } from "react-redux";

function CheckBoxIcon(props) {
  const { IconComponent, text, id, typeDispatch } = props;
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  return (
    <div className="checkbox_icon">
      <label className="checkbox" for={id}>
        <input
          id={id}
          className="check"
          name="checkbox"
          type="checkbox"
          onChange={(e) => {
            if (typeDispatch === "utility") {
              if (
                !filters.util_list.find((util) => util.type === e.target.id)
              ) {
                dispatch(
                  utilityAdded({
                    id: nanoid(),
                    type: e.target.id,
                  })
                );
              } else {
                dispatch(
                  utilityRemoved({
                    id: nanoid(),
                    type: e.target.id,
                  })
                );
              }
            } else if (typeDispatch === "category") {
              if (
                !filters.category_list.find((cate) => cate.type === e.target.id)
              ) {
                dispatch(
                  motelCategoryAdded({
                    id: nanoid(),
                    type: e.target.id,
                  })
                );
              }
            } else if (typeDispatch === "sex_allowed") {
              if (
                !filters.category_list.find((cate) => cate.type === e.target.id)
              ) {
                dispatch(
                  sex_allowedAdded({
                    id: nanoid(),
                    type: e.target.id,
                  })
                );
              }
            }
          }}
        />
        <span className="box"></span>
      </label>
      <div className="text_icon">
        <TextIcon
          Text={text}
          iconComponent={!!IconComponent && IconComponent}
          styleTitleName={{ paddingLeft: ".8rem" }}
          styleComponent={{ marginLeft: "0.2rem" }}
        />
      </div>
    </div>
  );
}

export default CheckBoxIcon;
