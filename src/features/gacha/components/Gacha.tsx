"use client";

import { FC, useCallback, useState } from "react";
import { dummyRecipes } from "../data/dummyRecipes";
import { Recipe } from "../types/recipeData";
import { generateWeeklyDinner } from "../utils/generateWeeklyDinner";
import { GachaButton } from "./GachaButton";
import { GachaResult } from "./GachaResult";

export const Gacha: FC = () => {
  const [items, setItems] = useState<Recipe[] | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const handleClick = useCallback(() => {
    if (isSpinning) return;
    setIsSpinning(true);
    setItems(generateWeeklyDinner(dummyRecipes));
    setAnimationKey((prev) => prev + 1);
    setTimeout(() => setIsSpinning(false), 700);
  }, [isSpinning]);

  return (
    <div className="flex flex-col items-center gap-10">
      <GachaButton handleClick={handleClick} isSpinning={isSpinning} />
      {items && <GachaResult key={animationKey} items={items} />}
    </div>
  );
};
