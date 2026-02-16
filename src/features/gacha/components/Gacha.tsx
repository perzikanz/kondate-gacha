import { FC, useCallback, useState } from "react";
import { GachaButton } from "./GachaButton";
import { GachaResult } from "./GachaResult";

export const Gacha: FC = () => {
  const [items, setItems] = useState<string[] | null>(null);
  const handleClick = useCallback(() => {
    setItems([
      "月: 鶏",
      "火: 豚",
      "水: 魚",
      "木: 卵",
      "金: 豆腐",
      "土: その他",
      "日: 鶏",
    ]);
  }, []);

  return (
    <>
      <GachaButton handleClick={handleClick} />
      {items && <GachaResult items={items} />}
    </>
  );
};
