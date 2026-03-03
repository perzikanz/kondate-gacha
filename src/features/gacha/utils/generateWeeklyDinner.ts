import { Recipe } from "../types/recipeData";

const DAYS = 7;
const MAX_FISH_PER_WEEK = 1;
const MAX_FRIED_PER_WEEK = 1;

/**
 * 配列からランダムに値を取り出す関数
 */
const pickRandom = <T>(array: T[]): T | undefined => {
  if (array.length === 0) return undefined;
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

/**
 * 夕食n日分の献立を生成する（保存なし前提）
 * ルール:
 * - isFallback はガチャ対象外
 * - mainTag 連続禁止
 * - 魚は週 MAX_FISH_PER_WEEK 回まで
 * - 揚げ物は週 MAX_FRIED_PER_WEEK 回まで
 *
 * 候補が尽きた場合は段階的に制約を緩める:
 * 1) 連続禁止のみ緩める
 * 2) 魚上限を緩める
 * 3) 揚げ物上限を緩める
 * 4) 全部緩める（最後の手段）
 */
export const generateWeeklyDinner = (recipes: Recipe[]): Recipe[] => {
  const pool = recipes.filter((r) => !r.isFallback);
  if (pool.length === 0) return [];

  const result: Recipe[] = [];
  let fishCount = 0;
  let friedCount = 0;

  for (let i = 0; i < DAYS; i++) {
    const prev = result[i - 1];
    const prevTag = prev?.mainTag;

    // 制約段階（0が通常、数字が大きいほど緩い）
    // 0: 全制約
    // 1: 連続禁止のみ緩める
    // 2: 連続禁止 + 魚上限を緩める
    // 3: 連続禁止 + 魚上限 + 揚げ物上限を緩める
    // 4: すべて緩める（完全ランダム）
    let picked: Recipe | null = null;

    for (let relax = 0; relax <= 4 && !picked; relax++) {
      const candidates = pool.filter((r) => {
        // 連続禁止
        if (relax === 0 || relax === 2 || relax === 3) {
          if (prevTag && r.mainTag === prevTag) return false;
        }
        // 魚上限
        if (relax <= 1) {
          if (r.mainTag === "魚" && fishCount >= MAX_FISH_PER_WEEK)
            return false;
        }
        // 揚げ物上限
        if (relax <= 2) {
          if (r.isFried && friedCount >= MAX_FRIED_PER_WEEK) return false;
        }
        return true;
      });

      picked = pickRandom(candidates) ?? null;
    }

    // それでも取れない場合（レシピ数が少なすぎるなど）
    // 最後の手段で pool からランダム
    if (!picked) picked = pickRandom(pool) ?? null;
    if (!picked) break;

    result.push(picked);
    if (picked.mainTag === "魚") fishCount++;
    if (picked.isFried) friedCount++;
  }

  return result;
};
