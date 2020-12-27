import React from "react";
import "./Search.scss";
import {
  PinkLocationIcon,
  CaretDownIcon,
  SearchIcon,
} from "../../assets/images/icons";

function SearchBar() {
  return (
    <div className="search_bar">
      <div className="search">
        <div className="select_city_filter_dropdown">
          <div className="select_control">
            <div className="icon_location">
              <PinkLocationIcon />
            </div>
            <div className="selected_value">
              <span>HCM</span>
            </div>
            <div className="dropdown_caret_icon">
              <CaretDownIcon />
            </div>
          </div>
        </div>
        <div className="input_field">
          <input
            type="text"
            placeholder="Tìm kiếm theo địa điểm, quận, tên đường..."
          />
          <div className="search_icon">
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
