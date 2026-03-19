"use client";

import { FC, useCallback, useState } from "react";
import { dummyRecipes } from "../data/dummyRecipes";
import { Recipe } from "../types/recipeData";
import { generateWeeklyDinner } from "../utils/generateWeeklyDinner";
import { GachaButton } from "./GachaButton";
import { GachaResult } from "./GachaResult";

export const Gacha: FC = () => {
  const [items, setItems] = useState<Recipe[] | null>(null);
  const handleClick = useCallback(() => {
    setItems(generateWeeklyDinner(dummyRecipes));
  }, []);

  return (
    <>
      <GachaButton handleClick={handleClick} />
      {items && <GachaResult items={items} />}
    </>
  );
};
