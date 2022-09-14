import axios from "axios";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import "./recipes_list.css";

const RecipesList = () => {
  const [recipesData, setRecipesData] = useState<any>();

  const fetchData = useCallback(async () => {
    const data = await axios("http://localhost:5000/api");

    setRecipesData(data);
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
        recipesData.data.recipes.map((recipe: any, index: number) => {
          return <p key={index}>{recipe.name}</p>;
        })
      )}
    </React.Fragment>
  );
};

export default RecipesList;
