# 献立ガチャ仕様（引き継ぎ用）

## 概要

夕食の献立を1週間分（7日）ランダム生成するWebアプリ。
同じような料理の偏りを防ぐ制約を設けている。

---

## 技術スタック

| レイヤー | 技術 |
|---|---|
| フロント | Next.js (App Router) / TypeScript / Tailwind CSS / shadcn/ui |
| バックエンド（予定） | Next.js Route Handlers / Prisma / Supabase (Postgres) |
| ホスティング | Vercel |

---

## ディレクトリ構成

```
src/
├── app/                    # Next.js App Router（ページ・レイアウト）
├── features/gacha/         # ガチャ機能のメインロジック
│   ├── components/         # ガチャ関連コンポーネント
│   ├── types/              # 型定義
│   └── utils/              # ユーティリティ関数
├── components/ui/          # 共通UIコンポーネント
└── lib/                    # 汎用ユーティリティ
```

---

## ドメイン型

```ts
type Recipe = {
  id: string
  title: string
  url: string
  mainTag: '鶏' | '豚' | '魚' | '卵' | '豆腐' | 'その他'
  isFallback: boolean  // 困ったらこれ！枠
  isFried: boolean     // 揚げ物判定
}
```

---

## ガチャ仕様

### 対象レシピ
`isFallback === false` のレシピのみ抽選対象。`isFallback === true` のレシピは「困ったらこれ！」枠として常時表示する。

### 制約

| # | 制約 | 定数 |
|---|---|---|
| ① | 同一レシピ重複禁止（週内1回まで） | — |
| ② | mainTag連続禁止（同じ主食材が連続しない） | — |
| ③ | 魚は週1回まで | `MAX_FISH_PER_WEEK = 1` |
| ④ | 揚げ物は週1回まで | `MAX_FRIED_PER_WEEK = 1` |

### 制約緩和ルール
候補がなくなる場合は段階的に緩和する。①（重複禁止）は常に維持。

| relax | 緩和内容 |
|---|---|
| 0 | 全制約適用 |
| 1 | ②mainTag連続禁止を緩和 |
| 2 | ③魚上限を緩和 |
| 3 | ④揚げ物上限を緩和 |

### 抽選アルゴリズム
1. `isFallback === false` のレシピを抽出
2. 7回ループ
3. 制約で候補をフィルター（緩和も含む）
4. 候補からランダム抽出
5. 状態更新（`fishCount` / `friedCount` / `usedIds` / `prevMainTag`）

---

## 将来の実装方針

現在はフロントのみでダミーデータを使用。将来的にAPI化する。

```
POST /api/gacha → DBからレシピ取得 → サーバー側で抽選 → 結果のみ返却
```

DevTools で全レシピが見えるのを防ぐため、抽選はサーバー側で行う。

### DB予定スキーマ（`recipes`テーブル）

| column | type |
|---|---|
| id | uuid |
| title | text |
| url | text |
| main_tag | text |
| is_fallback | boolean |
| is_fried | boolean |
| created_at | timestamptz |
