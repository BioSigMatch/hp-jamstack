# JAMStack Personal Blog with Eleventy

このプロジェクトは[Eleventy](https://www.11ty.dev/)を使用したJAMStackブログサイトです。静的サイト生成により高速で安全なブログを構築できます。

## プロジェクト構造

### ディレクトリ構成
```
jamstack-blog/
├── src/                    # 入力ディレクトリ（.eleventy.jsで設定）
│   ├── _includes/          # テンプレート・レイアウトファイル
│   │   ├── base.njk       # 全体のベースレイアウト
│   │   ├── article.njk    # 個別記事のレイアウト
│   │   ├── header.njk     # ヘッダーパーツ
│   │   ├── footer.njk     # フッターパーツ
│   │   └── article-snippet.njk # 記事リスト用パーツ
│   ├── blog/              # 個別記事（Markdownファイル）
│   │   ├── 2021-05-01-my-first-article.md
│   │   └── ...
│   ├── assets/            # 静的ファイル（画像など）
│   ├── admin/             # Decap CMS管理画面
│   ├── index.njk          # トップページ
│   ├── blog.njk           # ブログ一覧ページ
│   └── style.css          # スタイルシート
├── public/                # 出力ディレクトリ（ビルド後の静的ファイル）
├── .eleventy.js           # Eleventy設定ファイル
└── package.json
```

## Eleventyの仕組み

### 1. ファイル変換フロー
```
Markdownファイル → Nunjucksテンプレート → HTMLページ
    (コンテンツ)         (構造)           (最終出力)
```

### 2. レイアウトシステム
- **ページファイル**: `src/`直下のファイル（`index.njk`, `blog.njk`など）
  - URLとして公開される（`/`, `/blog/`）
  - `layout: "base.njk"`でレイアウトを指定

- **テンプレートファイル**: `src/_includes/`内のファイル
  - 他のページで使用されるレイアウト・パーツ
  - 直接URLは生成されない

### 3. ファイル参照システム
Eleventyは以下の順序でファイルを検索します：

1. **入力ディレクトリ**: `.eleventy.js`で`input: "src"`に設定
2. **レイアウト検索パス**: 
   - `src/_includes/` （デフォルト）
   - `src/` （フォールバック）
3. **自動検索**: `layout: "base.njk"`→`src/_includes/base.njk`を自動発見

### 4. URL生成規則
ファイルパスがそのままURLになります：
```
src/index.njk → /
src/blog.njk → /blog/
src/blog/2021-05-01-my-first-article.md → /blog/2021-05-01-my-first-article/
```

### 5. コンテンツの流れ
1. **Markdownファイル**（例：記事）がコンテンツの源泉
2. **フロントマター**でメタデータ（title, date, layout等）を指定
3. **レイアウトファイル**でHTML構造を定義
4. **`{{ content | safe }}`**でMarkdownの中身が展開される
5. 最終的に静的HTMLファイルが`public/`に生成される

## 開発コマンド

```bash
# 開発サーバー起動（ホットリロード付き）
npm start

# 本番用ビルド
npm run build
```

## 技術スタック

- **静的サイト生成器**: [Eleventy](https://www.11ty.dev/)
- **テンプレートエンジン**: Nunjucks
- **コンテンツ管理**: Markdown + Front Matter
- **CMS**: Decap CMS (旧Netlify CMS)
- **ホスティング**: Netlify

## 参考情報

### 元プロジェクト
これらのファイルは[Kevin Powell](https://kevinpowell.co)による[Codementor DevProjects Challenge](https://www.codementor.io/projects/web/create-a-fast-and-secure-blog-using-jamstack-c93coupnxb)のスターターファイルをベースにしています。

### チュートリアル
[こちらの動画](https://youtu.be/4wD00RT6d-g)でKevinがEleventy、Netlify、Netlify CMSを使用してフル機能のブログサイトを構築する過程を見ることができます。
