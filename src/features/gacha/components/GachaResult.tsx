import { FC } from "react";
import { Recipe } from "../types/recipeData";

const DAYS = ["月", "火", "水", "木", "金", "土", "日"];

type Props = {
  items: Recipe[];
};

export const GachaResult: FC<Props> = ({ items }) => {
  return items.map((recipe, i) => {
    const day = DAYS[i];
    return (
      <p key={recipe.id}>
        {day}：{recipe.url ? <a href={recipe.url}>{recipe.title}</a> : recipe.title}
      </p>
    );
  });
};
