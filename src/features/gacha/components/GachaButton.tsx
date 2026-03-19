import { HotpotIcon } from "@/components/icons/HotpotIcon";
import { Button } from "@/components/ui/button";
import { FC } from "react";

type Props = {
  handleClick: () => void;
};

export const GachaButton: FC<Props> = ({ handleClick }) => {
  return (
    <div className="flex justify-center pt-8 pb-6">
      <Button
        onClick={handleClick}
        className="h-14 px-10 text-lg font-bold rounded-full bg-amber-500 hover:bg-amber-400 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 active:shadow-md bg-clip-border"
      >
        ガチャを回す
        <HotpotIcon className="size-7" />
      </Button>
    </div>
  );
};
