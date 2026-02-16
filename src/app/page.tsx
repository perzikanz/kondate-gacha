"use client";

import { Button } from "@/components/ui/button";
import { Gacha } from "@/features/gacha/components/Gacha";
import { useCallback } from "react";

const Home = () => {
  return (
    <>
      <h1>Hello!</h1>
      <Gacha />
    </>
  );
};

export default Home;
