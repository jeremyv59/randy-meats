import React from "react";
import { MdFastfood } from "react-icons/md";
import "./nav_button.css";

type NavButtonProps = {
  title: string;
};

const NavButton: React.FC<NavButtonProps> = ({ title }) => {
  return (
    <React.Fragment>
      <a href="/" className="button">
        <MdFastfood className="icon"></MdFastfood>
        <p className="txt_item">{title}</p>
        <div className="button__horizontal"></div>
        <div className="button__vertical"></div>
      </a>
    </React.Fragment>
  );
};

export default NavButton;
