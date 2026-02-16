import { FC } from "react";

type Props = {
  items: string[];
};

export const GachaResult: FC<Props> = ({ items }) => {
  return items.map((item) => {
    return <p key={item}>{item}</p>;
  });
};
