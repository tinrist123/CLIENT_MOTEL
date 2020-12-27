import React from "react";
import logo from "../../assets/images/logo_size.png";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">
          <Link to="/home">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="author">
          <span className="email">Email: tinrist123@gmail.com</span>
          <p className="name">Full Name: Ngô Hiếu Tín</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
