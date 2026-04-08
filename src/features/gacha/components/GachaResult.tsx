import { FC } from "react";
import { Recipe } from "../types/recipeData";
import { OgpImage } from "./OgpImage";

const DAYS = ["月", "火", "水", "木", "金", "土", "日"];

// 曜日ごとにアースカラーで差別化
const DAY_BADGE_COLORS = [
  "#D4774A", // 月: テラコッタ
  "#C94B1C", // 火: 朱
  "#4A8B7A", // 水: セージティール
  "#6B8B4A", // 木: オリーブ
  "#C9922A", // 金: ゴールド
  "#7B6B9E", // 土: モーブ
  "#B54B62", // 日: クリムゾンローズ
];

type Props = {
  items: Recipe[];
};

export const GachaResult: FC<Props> = ({ items }) => {
  return (
    <div style={{ width: "100%" }}>
      {/* 区切り装飾 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        <div style={{ height: "1px", flex: 1, backgroundColor: "var(--gacha-border)" }} />
        <span
          style={{
            color: "var(--gacha-muted)",
            fontSize: "11px",
            letterSpacing: "0.2em",
            fontFamily: "var(--font-shippori-mincho)",
            fontWeight: 700,
          }}
        >
          今週の献立
        </span>
        <div style={{ height: "1px", flex: 1, backgroundColor: "var(--gacha-border)" }} />
      </div>

      {/* カードグリッド */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
          gap: "16px",
        }}
      >
        {items.map((recipe, i) => (
          <div
            key={recipe.id}
            style={{
              backgroundColor: "var(--gacha-card)",
              border: "1px solid var(--gacha-border)",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(28,26,23,0.06), 0 1px 3px rgba(28,26,23,0.04)",
              animation: "gacha-card-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both",
              animationDelay: `${i * 75}ms`,
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 10px 28px rgba(28,26,23,0.13), 0 2px 8px rgba(28,26,23,0.06)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 2px 10px rgba(28,26,23,0.06), 0 1px 3px rgba(28,26,23,0.04)";
            }}
          >
            <OgpImage recipeUrl={recipe.url} recipeTitle={recipe.title} />

            <div
              style={{
                padding: "12px 14px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "7px",
              }}
            >
              {/* 曜日バッジ */}
              <span
                style={{
                  backgroundColor: DAY_BADGE_COLORS[i],
                  color: "#F7F1E3",
                  fontSize: "11px",
                  fontWeight: 700,
                  fontFamily: "var(--font-shippori-mincho)",
                  padding: "3px 11px",
                  borderRadius: "999px",
                  letterSpacing: "0.06em",
                  display: "inline-block",
                  width: "fit-content",
                }}
              >
                {DAYS[i]}曜日
              </span>

              {/* レシピ名 */}
              <p
                style={{
                  color: "var(--gacha-charcoal)",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: 1.45,
                  fontFamily: "var(--font-shippori-mincho)",
                  margin: 0,
                }}
              >
                {recipe.title}
              </p>

              {/* リンク */}
              {recipe.url ? (
                <a
                  href={recipe.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--gacha-vermillion)",
                    fontSize: "12px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "3px",
                    letterSpacing: "0.02em",
                    opacity: 0.8,
                    transition: "opacity 0.15s ease",
                    fontFamily: "var(--font-noto-sans-jp)",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.8")
                  }
                >
                  レシピを見る →
                </a>
              ) : (
                <span
                  style={{
                    color: "var(--gacha-muted)",
                    fontSize: "12px",
                    opacity: 0.7,
                  }}
                >
                  URLなし
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
