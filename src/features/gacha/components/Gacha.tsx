import { FC, useCallback } from "react";
import { GachaButton } from "./GachaButton";

export const Gacha: FC = () => {
  const handleClick = useCallback(() => {
    console.log("click");
  }, []);

  return <GachaButton handleClick={handleClick} />;
};
