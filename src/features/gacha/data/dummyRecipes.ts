import { Recipe } from "../types/recipeData";

export const dummyRecipes: Recipe[] = [
  // 鶏
  { id: "1", title: "鶏の唐揚げ", url: "https://www.sirogohan.com/recipe/karaage/", mainTag: "鶏", isFallback: false, isFried: true },
  { id: "2", title: "チキン南蛮", url: "https://www.kikkoman.co.jp/homecook/search/recipe/00051990/", mainTag: "鶏", isFallback: false, isFried: false },
  { id: "3", title: "鶏の照り焼き", url: "https://www.sirogohan.com/recipe/teriyaki/", mainTag: "鶏", isFallback: false, isFried: false },
  // 豚
  { id: "4", title: "豚の生姜焼き", url: "https://www.sirogohan.com/recipe/shougayaki/", mainTag: "豚", isFallback: false, isFried: false },
  { id: "5", title: "豚汁", url: "https://www.sirogohan.com/recipe/tonjiru/", mainTag: "豚", isFallback: false, isFried: false },
  { id: "6", title: "回鍋肉", url: "https://park.ajinomoto.co.jp/recipe/card/704735/", mainTag: "豚", isFallback: false, isFried: false },
  // 魚
  { id: "7", title: "鮭のムニエル", url: "https://www.sirogohan.com/recipe/sakesote/", mainTag: "魚", isFallback: false, isFried: false },
  { id: "8", title: "サバの味噌煮", url: "https://www.sirogohan.com/recipe/sabamisoni/", mainTag: "魚", isFallback: false, isFried: false },
  // 卵
  { id: "9", title: "親子丼", url: "https://www.sirogohan.com/recipe/oyakodon/", mainTag: "卵", isFallback: false, isFried: false },
  { id: "10", title: "オムレツ", url: "https://www.sirogohan.com/recipe/omuretu/", mainTag: "卵", isFallback: false, isFried: false },
  // 豆腐
  { id: "11", title: "麻婆豆腐", url: "https://park.ajinomoto.co.jp/recipe/card/802942/", mainTag: "豆腐", isFallback: false, isFried: false },
  { id: "12", title: "肉豆腐", url: "https://www.sirogohan.com/recipe/nikudouhu/", mainTag: "豆腐", isFallback: false, isFried: false },
  // その他
  { id: "13", title: "カレーライス", url: "https://housefoods.jp/data/curryhouse/cook/basic.html", mainTag: "その他", isFallback: false, isFried: false },
  { id: "14", title: "ナポリタン", url: "https://www.nisshin-seifun-welna.com/index/recipe/detail/P-914.html", mainTag: "その他", isFallback: false, isFried: false },
  // 困ったらこれ！枠（ガチャ対象外）
  { id: "15", title: "納豆ご飯", url: "https://www.sirogohan.com/recipe/yakikimunattou/", mainTag: "その他", isFallback: true, isFried: false },
  { id: "16", title: "豆腐丼", url: "https://www.sirogohan.com/recipe/touhu/", mainTag: "その他", isFallback: true, isFried: false },
];
