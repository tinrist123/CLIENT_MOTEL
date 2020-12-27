import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo_size.png";
import { Link } from "react-router-dom";
import { Search } from "../index";

function Header(props) {
  return (
    <div className="header">
      <div className="container">
        <div className="logo_search">
          <div className="logo">
            <Link to="/home">
              <img src={logo} alt="" />
            </Link>
          </div>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Header;
