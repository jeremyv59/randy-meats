import { Card } from "antd";
import React, { memo } from "react";
import { RecipeCardProps } from "../../types/recipe_type";
import "./recipe_card.css";

const { Meta } = Card;

const RecipeCard: React.FC<RecipeCardProps> = memo(
  ({ id, imageUrl, title, rate }) => {
    console.log("render card");

    return (
      <Card
        //   style={{ maxWidth: 325 }}
        className="card_style"
        key={id}
        cover={<img alt="food" className="food_image" src={imageUrl}></img>}
      >
        <Meta title={title}></Meta>
        <p>{rate}</p>
      </Card>
    );
  }
);

export default RecipeCard;
