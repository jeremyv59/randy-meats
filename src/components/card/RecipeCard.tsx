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
        className="card_style"
        key={id}
        cover={<img alt="food" className="food_image" src={imageUrl}></img>}
      >
        <div className="content_container">
          <p className="title_style">{title}</p>
          <p className="rate_style">{rate}</p>
        </div>
      </Card>
    );
  }
);

export default RecipeCard;
