import { Card } from "antd";
import React from "react";
import { RecipeCardProps } from "../../types/recipe_type";
import "./recipe_card.css";

const { Meta } = Card;

const RecipeCard: React.FC<RecipeCardProps> = (props) => {
  return (
    <Card
      style={{ maxWidth: 325 }}
      key={props.key}
      cover={<img alt="food" className="food_image" src={props.imageUrl}></img>}
    >
      <Meta title={props.title}></Meta>
      <p>{props.rate}</p>
    </Card>
  );
};

export default RecipeCard;
