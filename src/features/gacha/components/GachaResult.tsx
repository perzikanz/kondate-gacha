import { FC } from "react";
import { Recipe } from "../types/recipeData";
import { OgpImage } from "./OgpImage";

const DAYS = ["月", "火", "水", "木", "金", "土", "日"];

const DAY_BADGE_COLORS = [
  "#D4774A", // 月
  "#C94B1C", // 火
  "#4A8B7A", // 水
  "#6B8B4A", // 木
  "#C9922A", // 金
  "#7B6B9E", // 土
  "#B54B62", // 日
];

type Props = {
  items: Recipe[];
};

export const GachaResult: FC<Props> = ({ items }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-gacha-border" />
        <span className="font-[family-name:var(--font-shippori-mincho)] font-bold text-[11px] tracking-[0.2em] text-gacha-muted">
          今週の献立
        </span>
        <div className="h-px flex-1 bg-gacha-border" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((recipe, i) => (
          <div
            key={recipe.id}
            className="bg-gacha-card border border-gacha-border rounded-[14px] overflow-hidden shadow-gacha-card hover:shadow-gacha-card-hover hover:-translate-y-1 transition-all duration-200 animate-gacha-card-in"
            style={{ animationDelay: `${i * 75}ms` }}
          >
            <OgpImage recipeUrl={recipe.url} recipeTitle={recipe.title} />

            <div className="flex flex-col gap-1.5 px-3.5 pt-3 pb-4">
              <span
                className="text-gacha-cream text-[11px] font-bold font-[family-name:var(--font-shippori-mincho)] px-2.5 py-0.5 rounded-full tracking-[0.06em] w-fit"
                style={{ backgroundColor: DAY_BADGE_COLORS[i] }}
              >
                {DAYS[i]}曜日
              </span>

              <p className="font-[family-name:var(--font-shippori-mincho)] font-bold text-sm text-gacha-charcoal leading-snug m-0">
                {recipe.title}
              </p>

              {recipe.url ? (
                <a
                  href={recipe.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gacha-vermillion text-xs opacity-80 hover:opacity-100 transition-opacity no-underline"
                >
                  レシピを見る →
                </a>
              ) : (
                <span className="text-gacha-muted text-xs opacity-70">URLなし</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
