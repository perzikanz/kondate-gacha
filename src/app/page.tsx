"use client";

import { Button } from "@/components/ui/button";
import { useCallback } from "react";

const Home = () => {
  const onClick = useCallback(() => {
    console.log("click");
  }, []);

  return (
    <>
      <h1>Hello!</h1>
      <Button variant="outline" onClick={onClick}>
        button
      </Button>
    </>
  );
};

export default Home;
