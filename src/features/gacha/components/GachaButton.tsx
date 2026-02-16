import { Button } from "@/components/ui/button";
import { FC } from "react";

type Props = {
  handleClick: () => void;
};

export const GachaButton: FC<Props> = ({ handleClick }) => {
  return (
    <Button variant="outline" onClick={handleClick}>
      button
    </Button>
  );
};
