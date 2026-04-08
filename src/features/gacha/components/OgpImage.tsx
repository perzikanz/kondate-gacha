"use client";

import { useEffect, useState } from "react";

type Props = {
  recipeUrl: string;
  recipeTitle: string;
};

export const OgpImage = ({ recipeUrl, recipeTitle }: Props) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!recipeUrl) return;

    fetch(`/api/ogp?url=${encodeURIComponent(recipeUrl)}`)
      .then((res) => res.json())
      .then((data) => setImageUrl(data.imageUrl ?? null))
      .catch(() => setImageUrl(null));
  }, [recipeUrl]);

  if (!recipeUrl || imageUrl === null) {
    return <div className="w-full h-40 bg-gacha-parchment" />;
  }

  return (
    <div className="relative w-full h-40">
      <img
        src={imageUrl}
        alt={recipeTitle}
        className="w-full h-full object-cover rounded-t-xl"
      />
    </div>
  );
};
