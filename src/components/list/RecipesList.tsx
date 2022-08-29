import React, { ReactNode } from "react";
import "./recipes_list.css";

type RecipesListProps = {
  data: ReactNode;
};

const RecipesList: React.FC<RecipesListProps> = ({ data }) => {
  console.log("data", data);
  return (
    <div>
      <p>Data</p>
      {/* {(typeof data === "undefined") ? (<p>Loading...</p>) : } */}
    </div>
  );
};

export default RecipesList;
