export type MainTag = "鶏" | "豚" | "魚" | "卵" | "豆腐" | "その他";

export type Recipe = {
  id: string;
  title: string;
  url: string;
  mainTag: MainTag;
  isFallback: boolean;
  isFried: boolean;
};
