import React, { ReactNode, useEffect, useState } from "react";
import { getFewRecipes } from "../../data/GetRecipes";
import "./recipes_list.css";

const RecipesList: React.FC = () => {
  const [recipesData, setRecipesData] = useState<any>();

  useEffect(() => {
    getFewRecipes().then((res) => setRecipesData(res));
  }, []);

  return (
    <div>
      {typeof recipesData === "undefined" ? (
        <p>Loading...</p>
      ) : (
        recipesData.data.recipes.map((recipe: any, index: number) => {
          // <p key={index}>{recipe.name}</p>;
          console.log("rec", recipe.name);
        })
      )}
    </div>
  );
};

export default RecipesList;
