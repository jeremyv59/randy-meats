import axios, { AxiosResponse } from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Recipe, RecipeData } from "../../types/recipe_type";
import "./recipes_list.css";

const RecipesList: React.FC = () => {
  const [recipesData, setRecipesData] = useState<RecipeData | null>(null);

  const fetchData = useCallback(async () => {
    await axios
      .get<RecipeData>("http://localhost:5000/api")
      .then((response: AxiosResponse<RecipeData, any>) => {
        setRecipesData(response.data);
      });
  }, []);

  // the useEffect is only there to call `fetchData` at the right time
  useEffect(() => {
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [fetchData]);

  return (
    <React.Fragment>
      {!recipesData ? (
        <p>Loading...</p>
      ) : (
        recipesData.recipes.map((recipe: any, index: number) => {
          return <p key={index}>{recipe.name}</p>;
        })
      )}
    </React.Fragment>
  );
};

export default RecipesList;
