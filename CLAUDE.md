# CLAUDE.md

必ず日本語で回答してください。
このファイルは、Claude Code（claude.ai/code）がこのリポジトリで作業する際のガイダンスを提供します。

## プロジェクト概要

これはD-MASH LINE（Garage MASH）のReact + TypeScriptランディングページです。日本を拠点とする車買取サービスのWebサイトで、Viteをビルドツールとして使用し、会社の車買取サービスを紹介するシングルページのランディングサイトとして機能します。

## 開発コマンド

### 基本的な開発ワークフロー
- `npm run dev` - ホットリロード付きの開発サーバーを開始
- `npm run build` - 本番用にビルド（`docs/`ディレクトリに出力）
- `npm run lint` - コード品質チェック用のESLintを実行
- `npm run preview` - 本番ビルドをローカルでプレビュー

### ビルドとデプロイプロセス
READMEによると、標準的なビルドとデプロイプロセスは以下です：
```bash
npm run build && git add -A && git commit -m "build"
```

## アーキテクチャと構造

### ビルド設定
- **Vite**: Reactプラグイン付きのモダンビルドツール
- **出力ディレクトリ**: `docs/`（GitHub Pagesデプロイ用に設定）
- **TypeScript**: アプリとNodeの設定を分離して構成

### コンポーネント構造
- **シングルページアプリケーション**: すべてのコンテンツは`App.tsx`でセクションとして表示
- **コンポーネント構成**:
  - `src/components/FaqItem.tsx` - 内部状態を持つ折りたたみ式FAQコンポーネント
  - `src/components/icons/` - SVGアイコンコンポーネント（DialogueIcon, PriceIcon, SpeedIcon）
  - アイコンは`src/components/icons/index.ts`からバレルエクスポートされています

### スタイリングアプローチ
- 日本語コンテンツ用のCSSモジュール/クラス
- ランディングページセクション用のレスポンシブデザイン
- 車の画像とステップイラスト用の静的アセット管理

### アプリケーションの主要セクション
ランディングページは以下の主要セクションで構成されています（すべてApp.tsx内）：
1. ロゴとCTAボタン付きヘッダー
2. ヒーローセクション
3. 特徴（アイコン付き3つの主要メリット）
4. プロセスフロー（4ステップの買取プロセス）
5. お客様の声
6. ポートフォリオ/最近の買取実績
7. FAQセクション（FaqItemコンポーネントを使用）
8. サービスエリア
9. 最終CTAセクション
10. 会社情報付きフッター

### 静的アセット
- 車の画像: `src/assets/`（prius.jpg, harrier.jpg, alphard.jpg）
- プロセスステップ画像: `src/assets/step1-4.png`
- 会社代表者画像: `src/assets/me.jpg`

### 外部連携
- 顧客問い合わせ用のLINE連携: `https://lin.ee/dHbAsr2`
- 会社Webサイト: `https://dmash-line.com/`

## コード品質基準

### Linting設定
- TypeScriptサポート付きESLint
- React HooksとReact Refreshプラグイン
- ブラウザグローバルを設定
- `dist/`ディレクトリを除外

### TypeScript設定
- 厳密なTypeScript設定
- アプリコードとNode.jsツールの設定を分離
- コンポーネントprops用のインターフェース定義（例：`FaqItemProps`）

## 開発ノート

- 車買取サービス用の日本語ランディングページです
- サイトは`docs/`ディレクトリにビルドされます（GitHub Pagesホスティング用）
- テストフレームワークは現在設定されていません
- 複雑な状態管理はなく、ローカルコンポーネント状態のみ使用
- すべてのコンテンツは静的/ハードコードされています（CMSやAPI連携なし）
