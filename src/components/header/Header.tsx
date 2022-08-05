import React from "react";
import "./header.css";

const logo = require("../../assets/logo.png");

const Header = (): JSX.Element => {
  return (
    <div className="full_container">
      <div className="container logo_container">
        <img className="logo" src={String(logo)} alt="logo"></img>
      </div>
      <div className="container_links"></div>
    </div>
  );
};

export default Header;
