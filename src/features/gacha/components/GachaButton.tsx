import { HotpotIcon } from "@/components/icons/HotpotIcon";
import { FC } from "react";

type Props = {
  handleClick: () => void;
  isSpinning: boolean;
};

export const GachaButton: FC<Props> = ({ handleClick, isSpinning }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "14px",
        paddingTop: "8px",
      }}
    >
      <button
        onClick={handleClick}
        disabled={isSpinning}
        style={{
          width: "168px",
          height: "168px",
          borderRadius: "50%",
          backgroundColor: "var(--gacha-vermillion)",
          border: "4px solid #E06A3A",
          color: "var(--gacha-cream)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          cursor: isSpinning ? "not-allowed" : "pointer",
          boxShadow:
            "0 8px 28px rgba(201,75,28,0.38), 0 2px 8px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.12)",
          animation: isSpinning
            ? "gacha-button-spin 0.7s linear"
            : "gacha-pulse-ring 2.4s ease-out infinite",
          outline: "none",
          transition: "transform 0.15s ease, box-shadow 0.15s ease",
        }}
        onMouseEnter={(e) => {
          if (!isSpinning) {
            (e.currentTarget as HTMLButtonElement).style.transform =
              "translateY(-4px) scale(1.02)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 14px 36px rgba(201,75,28,0.48), 0 4px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.12)";
          }
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform =
            "translateY(0) scale(1)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 8px 28px rgba(201,75,28,0.38), 0 2px 8px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.12)";
        }}
        onMouseDown={(e) => {
          if (!isSpinning) {
            (e.currentTarget as HTMLButtonElement).style.transform =
              "translateY(-1px) scale(0.97)";
          }
        }}
        onMouseUp={(e) => {
          if (!isSpinning) {
            (e.currentTarget as HTMLButtonElement).style.transform =
              "translateY(-4px) scale(1.02)";
          }
        }}
      >
        <HotpotIcon className="w-10 h-10" fill="var(--gacha-cream)" />
        <span
          style={{
            fontFamily: "var(--font-shippori-mincho)",
            fontWeight: 700,
            fontSize: "17px",
            letterSpacing: "0.12em",
            lineHeight: 1,
          }}
        >
          ガチャを回す
        </span>
      </button>

      <p
        style={{
          color: "var(--gacha-muted)",
          fontSize: "12px",
          letterSpacing: "0.12em",
          fontFamily: "var(--font-noto-sans-jp)",
          minHeight: "18px",
          transition: "opacity 0.3s ease",
        }}
      >
        {isSpinning ? "献立を考え中…" : "ボタンを押して今週の夕食を決めよう"}
      </p>
    </div>
  );
};
