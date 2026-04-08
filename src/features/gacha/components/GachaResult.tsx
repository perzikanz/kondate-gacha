import { FC } from "react";
import { Recipe } from "../types/recipeData";
import { OgpImage } from "./OgpImage";

const DAYS = ["月", "火", "水", "木", "金", "土", "日"];

type Props = {
  items: Recipe[];
};

export const GachaResult: FC<Props> = ({ items }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((recipe, i) => (
        <div key={recipe.id} className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <OgpImage recipeUrl={recipe.url} recipeTitle={recipe.title} />
          <div className="p-3 flex flex-col gap-1">
            <span className="text-xs font-bold text-white bg-orange-400 rounded-full px-2 py-0.5 w-fit">
              {DAYS[i]}曜日
            </span>
            <p className="text-sm font-semibold text-gray-800 leading-snug">{recipe.title}</p>
            {recipe.url ? (
              <a
                href={recipe.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-500 hover:underline truncate"
              >
                レシピを見る
              </a>
            ) : (
              <span className="text-xs text-gray-400">URLなし</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
