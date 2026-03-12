# kondate-gacha

献立ガチャ：週の夕食メニューをランダムに決めるWebアプリ。

本番URL: https://kondate-gacha.vercel.app/

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript
- **UIライブラリ**: React 19
- **スタイリング**: Tailwind CSS v4
- **UIコンポーネント**: shadcn/ui、Base UI、Radix UI
- **デプロイ**: Vercel
- **バックエンド（予定）**: Next.js Route Handlers、Prisma、Supabase (Postgres)

## ディレクトリ構成

- `src/app/` — Next.js App Router（ページ・レイアウト）
- `src/features/gacha/` — ガチャ機能のメインロジック
  - `components/` — ガチャ関連コンポーネント
  - `types/` — 型定義
  - `utils/` — ユーティリティ関数
- `src/components/ui/` — 共通UIコンポーネント
- `src/lib/` — 汎用ユーティリティ

## 開発コマンド

```bash
npm run dev    # 開発サーバー起動
npm run build  # ビルド
npm run lint   # リント
```

## 現在のフェーズと今後の方針

- **現在（フェーズ1）**: フロントのみ、ダミーデータで動作中
- **将来**: `POST /api/gacha` → Supabase/Prismaでサーバー側抽選に移行予定
  - 理由：全レシピがDevToolsで見えるのを防ぐため
- **次のステップ**: DB作成 → Prisma接続 → API化

詳細仕様は [docs/spec.md](docs/spec.md) を参照。

## コアドメイン型

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

## ガチャ制約ルール

- 同一レシピの重複禁止（常に維持）
- 同じ `mainTag` の連続禁止
- 魚は週1回まで（`MAX_FISH_PER_WEEK = 1`）
- 揚げ物は週1回まで（`MAX_FRIED_PER_WEEK = 1`）
- 候補がなくなった場合は段階的に制約を緩和（relax 0〜3）
- ガチャ対象は `isFallback === false` のみ
- `isFallback === true` は「困ったらこれ！」枠として常時表示（ガチャ対象外）

## Claudeへの指示

- やり取り、コミットメッセージ、コードコメントなど、ユーザーが読むものはすべて**日本語**で行うこと。
- コード本体（変数名・関数名等）は英語でよい。
