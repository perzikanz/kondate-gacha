import { HotpotIcon } from "@/components/icons/HotpotIcon";
import { FC } from "react";

type Props = {
  handleClick: () => void;
  isSpinning: boolean;
};

export const GachaButton: FC<Props> = ({ handleClick, isSpinning }) => {
  return (
    <div className="flex flex-col items-center gap-3.5 pt-2">
      <button
        onClick={handleClick}
        disabled={isSpinning}
        className="w-[168px] h-[168px] rounded-full bg-gacha-vermillion border-4 border-[#E06A3A] text-gacha-cream flex flex-col items-center justify-center gap-2 shadow-gacha-btn hover:shadow-gacha-btn-hover hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 active:scale-[0.97] disabled:pointer-events-none transition-all duration-150 outline-none"
        style={{
          animation: isSpinning
            ? "gacha-button-spin 0.7s linear"
            : "gacha-pulse-ring 2.4s ease-out infinite",
        }}
      >
        <HotpotIcon className="w-10 h-10" fill="var(--gacha-cream)" />
        <span className="font-[family-name:var(--font-shippori-mincho)] font-bold text-[17px] tracking-[0.12em] leading-none">
          ガチャを回す
        </span>
      </button>

      <p className="text-gacha-muted text-[12px] tracking-[0.12em] min-h-[18px]">
        {isSpinning ? "献立を考え中…" : "ボタンを押して今週の夕食を決めよう"}
      </p>
    </div>
  );
};
