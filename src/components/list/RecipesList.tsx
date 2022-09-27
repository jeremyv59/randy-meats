import axios, { AxiosResponse } from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Recipe, RecipeData } from "../../types/recipe_type";
import { Spin } from "antd";
import "antd/lib/spin/style/index.css";
import "./recipes_list.css";
import RecipeCard from "../card/RecipeCard";

const RecipesList: React.FC = () => {
  const [recipesData, setRecipesData] = useState<RecipeData | null>(null);

  const randomImage = require("../../assets/no_image.jpg");

  const fetchData = useCallback(async () => {
    await axios
      .get<RecipeData>("http://localhost:5000/api")
      .then((response: AxiosResponse<RecipeData, any>) => {
        setRecipesData(response.data);
      });
  }, []);

  // the useEffect is only there to call `fetchData` at the right time
  useEffect(() => {
    console.log("UE fetch");

    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [fetchData]);

  console.log("render list");

  return (
    <React.Fragment>
      {!recipesData ? (
        <div className="spinner_container">
          <Spin tip="Chargement..." size="large"></Spin>
        </div>
      ) : (
        <div className="container_recipes_list">
          {recipesData.recipes.map((recipe: Recipe, index: number) => {
            console.log("recipe map", recipe);
            return (
              <RecipeCard
                id={index}
                title={recipe.name}
                imageUrl={recipe.images[3] ? recipe.images[3] : randomImage}
                rate={recipe.rate}
              ></RecipeCard>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default RecipesList;
