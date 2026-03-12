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

## Claudeへの指示

- やり取り、コミットメッセージ、コードコメントなど、ユーザーが読むものはすべて**日本語**で行うこと。
- コード本体（変数名・関数名等）は英語でよい。
