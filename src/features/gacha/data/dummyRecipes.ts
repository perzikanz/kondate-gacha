import { Recipe } from "../types/recipeData";

export const dummyRecipes: Recipe[] = [
  // 鶏
  { id: "1", title: "鶏の唐揚げ", url: "", mainTag: "鶏", isFallback: false, isFried: true },
  { id: "2", title: "チキン南蛮", url: "", mainTag: "鶏", isFallback: false, isFried: false },
  { id: "3", title: "鶏の照り焼き", url: "", mainTag: "鶏", isFallback: false, isFried: false },
  // 豚
  { id: "4", title: "豚の生姜焼き", url: "", mainTag: "豚", isFallback: false, isFried: false },
  { id: "5", title: "豚汁", url: "", mainTag: "豚", isFallback: false, isFried: false },
  { id: "6", title: "回鍋肉", url: "", mainTag: "豚", isFallback: false, isFried: false },
  // 魚
  { id: "7", title: "鮭のムニエル", url: "", mainTag: "魚", isFallback: false, isFried: false },
  { id: "8", title: "サバの味噌煮", url: "", mainTag: "魚", isFallback: false, isFried: false },
  // 卵
  { id: "9", title: "親子丼", url: "", mainTag: "卵", isFallback: false, isFried: false },
  { id: "10", title: "オムレツ", url: "", mainTag: "卵", isFallback: false, isFried: false },
  // 豆腐
  { id: "11", title: "麻婆豆腐", url: "", mainTag: "豆腐", isFallback: false, isFried: false },
  { id: "12", title: "肉豆腐", url: "", mainTag: "豆腐", isFallback: false, isFried: false },
  // その他
  { id: "13", title: "カレーライス", url: "", mainTag: "その他", isFallback: false, isFried: false },
  { id: "14", title: "ナポリタン", url: "", mainTag: "その他", isFallback: false, isFried: false },
  // 困ったらこれ！枠（ガチャ対象外）
  { id: "15", title: "納豆ご飯", url: "", mainTag: "その他", isFallback: true, isFried: false },
  { id: "16", title: "冷凍チャーハン", url: "", mainTag: "その他", isFallback: true, isFried: false },
];
