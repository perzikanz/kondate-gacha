# 献立ガチャ仕様（引き継ぎ用）

## ディレクトリ構成

- `src/app/` — Next.js App Router（ページ・レイアウト）
- `src/features/gacha/` — ガチャ機能のメインロジック
  - `components/` — ガチャ関連コンポーネント
  - `types/` — 型定義
  - `utils/` — ユーティリティ関数
- `src/components/ui/` — 共通UIコンポーネント
- `src/lib/` — 汎用ユーティリティ

---

## 1. ガチャの目的

夕食の献立を**1週間分（7日）ランダム生成**する。

* 同じような料理の偏りを防ぐ
* お気に入りレシピ（困ったらこれ！）は別枠
* ガチャ結果は保存しない

---

# 2. レシピデータ構造

```ts
type Recipe = {
  id: string
  title: string
  url: string
  mainTag: '鶏' | '豚' | '魚' | '卵' | '豆腐' | 'その他'
  isFallback: boolean
  isFried: boolean
}
```

### フィールド説明

| フィールド      | 意味       |
| ---------- | -------- |
| id         | UUID     |
| title      | レシピ名     |
| url        | レシピURL   |
| mainTag    | 主食材タグ    |
| isFallback | 困ったらこれ！枠 |
| isFried    | 揚げ物判定    |

---

# 3. ガチャ対象レシピ

ガチャに使用するのは

```
isFallback === false
```

のレシピのみ。

---

# 4. 生成する献立

```
1週間 = 7件
```

定数

```ts
const DAYS = 7
```

---

# 5. ガチャ制約

## ① 同一レシピ重複禁止

同じレシピは週内で**1回まで**

実装

```ts
usedIds.has(recipe.id)
```

---

## ② mainTag連続禁止

同じ主食材が連続しない

NG例

```
月 鶏
火 鶏
```

---

## ③ 魚は週1回まで

```ts
const MAX_FISH_PER_WEEK = 1
```

---

## ④ 揚げ物は週1回まで

```ts
const MAX_FRIED_PER_WEEK = 1
```

---

# 6. 制約緩和ルール

制約が厳しすぎて候補がなくなる場合
段階的に制約を緩める

| relax | 緩和内容           |
| ----- | -------------- |
| 0     | 全制約適用          |
| 1     | mainTag連続禁止を緩和 |
| 2     | 魚上限を緩和         |
| 3     | 揚げ物上限を緩和       |

※重複禁止は常に維持

---

# 7. 抽選アルゴリズム

1. ガチャ対象レシピ抽出
2. 7回ループ
3. 制約で候補をfilter
4. 候補からランダム抽出
5. 状態更新

更新する状態

```
fishCount
friedCount
usedIds
prevMainTag
```

---

# 8. 困ったらこれ！枠

```
isFallback === true
```

特徴

* ガチャに含めない
* 常時表示
* SSR表示予定

---

# 9. フロント動作（現在）

### ボタン押下

```
ガチャを回す
```

### 表示

```
Day1
Day2
Day3
...
Day7
```

### UX

* ローディング表示あり
* Skeleton表示

---

# 10. 将来の実装方針

現在

```
フロントのみ
ダミーデータ
```

将来

```
POST /api/gacha
 ↓
DBからレシピ取得
 ↓
サーバー側で抽選
 ↓
結果のみ返却
```

理由

* DevToolsで全レシピが見えるのを防ぐ

---

# 11. DB予定スキーマ

```
recipes
```

| column      | type        |
| ----------- | ----------- |
| id          | uuid        |
| title       | text        |
| url         | text        |
| main_tag    | text        |
| is_fallback | boolean     |
| is_fried    | boolean     |
| created_at  | timestamptz |

---

# 12. 技術スタック

フロント

```
Next.js (App Router)
TypeScript
Tailwind
shadcn/ui
```

バックエンド（予定）

```
Next.js Route Handlers
Prisma
Supabase(Postgres)
```

---

# 現在のフェーズ

```
フェーズ1
フロントのみでガチャ完成
```

次のステップ

```
DB作成
↓
Prisma接続
↓
API化
```
