# kondate-gacha

献立ガチャ：週の夕食メニューをランダムに決めるWebアプリ。
本番URL: https://kondate-gacha.vercel.app/

## Claudeへの指示

- やり取り、コミットメッセージ、コードコメントなど、ユーザーが読むものはすべて**日本語**で行うこと。
- コード本体（変数名・関数名等）は英語でよい。
- Gitコミットはユーザーが明示的に指示したときのみ実行すること。

## 現在のフェーズ

フェーズ1：フロントのみ、ダミーデータで動作中。
次のステップ：DB作成 → Prisma接続 → API化（`POST /api/gacha`）

### 開発コマンド

```bash
npm run dev    # 開発サーバー起動
npm run build  # ビルド
npm run lint   # リント
```

### 参照先

詳細はこれらのファイルを参照（必要に応じてClaudeに読ませること）。

- [docs/spec.md](docs/spec.md) — 仕様・ドメイン型・ガチャ制約・技術スタック・ディレクトリ構成
