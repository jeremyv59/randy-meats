import { AxiosResponse } from "axios";
import React, { ReactNode, useEffect, useState } from "react";
import { getFewRecipes } from "../../data/GetRecipes";
import SearchForm from "../form/SearchForm";
import RecipesList from "../list/RecipesList";
import "./main_content.css";

const MainContent = () => {
  return (
    <div className="container">
      <h2 className="main_title">
        Bienvenue sur RandyMeats, ici vous pourrez créer des menus en fonction
        de vos envies et les enregistrer afin de pouvoir les avoir sous la main
      </h2>
      <div>
        <SearchForm></SearchForm>
      </div>

      <RecipesList></RecipesList>

      {/* <Form>
        <Form.Group>
          <Form.Label></Form.Label>
        </Form.Group>
      </Form> */}
    </div>
  );
};

export default MainContent;
