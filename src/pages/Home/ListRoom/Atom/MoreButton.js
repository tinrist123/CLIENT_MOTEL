import React from "react";
import "./MoreButton.scss";
import { useDispatch } from "react-redux";
import { reset_filter } from "../../../../Redux/features/Filter/FilterSlice";
function MoreButton(props) {
  const { actionClick, text } = props;
  const dispatch = useDispatch();

  function onResetFilter() {
    dispatch(reset_filter());
  }

  return (
    <div className="more_button">
      <button onClick={onResetFilter}>{text}</button>
    </div>
  );
}

export default MoreButton;
