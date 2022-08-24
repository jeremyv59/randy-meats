import React from "react";
import SearchForm from "../form/SearchForm";
import "./main_content.css";

const MainContent = () => {
  return (
    <div className="container">
      <h2 className="main_title">
        Bienvenue sur RandyMeats, ici vous pourrez créer des menus en fonction
        de vos envies et les enregistrer afin de pouvoir les avoir sous la main
      </h2>
      <SearchForm></SearchForm>
      {/* <Form>
        <Form.Group>
          <Form.Label></Form.Label>
        </Form.Group>
      </Form> */}
    </div>
  );
};

export default MainContent;
