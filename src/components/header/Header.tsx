import React from "react";
import "./header.css";
import NavButton from "../button/NavButton";

const logo = require("../../assets/logo.png");

const Header = (): JSX.Element => {
  return (
    <div className="full_container">
      <div className="container header_container">
        <div className="logo_container">
          <img className="logo" src={String(logo)} alt="logo"></img>
          <h4 className="title">RandyMeats</h4>
        </div>

        <div className="item_container">
          <NavButton title="Mes menus"></NavButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
