import React from "react";
import "./header.css";

const logo = require("../../assets/logo.png");

const Header = (): JSX.Element => {
  return (
    <div className="full_container">
      <div className="container header_container">
        <div className="logo_container">
          <img className="logo" src={String(logo)} alt="logo"></img>
          <h4>RandyMeats</h4>
        </div>
        <div className="item_container">
          <a href="/menus">Mes menus</a>
        </div>
      </div>
      {/* <div className="container_links"></div> */}
    </div>
  );
};

export default Header;
