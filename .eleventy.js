const  { DateTime } = require("luxon") // 日付をフォーマットするためのライブラリ「Luxon」からDateTimeオブジェクトをインポート

module.exports = function(eleventyConfig) {

    // eleventyはテンプレート言語をHTMLに変換するためのツールであり，mdやnjkなどをHTMLに変換する
    eleventyConfig.addPassthroughCopy("./src/style.css"); // CSSファイルをパススルーコピー
    eleventyConfig.addPassthroughCopy("./src/assets"); // assets（画像など）をパススルーコピー
    eleventyConfig.addPassthroughCopy("./src/admin"); // Decap CMSの管理画面をパススルーコピー

    // Eleventyの設定ファイルに、"postDate" という名前の新しいフィルターを追加する（参照:eleventy rocks）
    eleventyConfig.addFilter("postDate", (dateObj) => {
        
        // フィルターに渡されたJavaScriptの日付オブジェクト（dateObj）を、
        // 日付処理ライブラリ「Luxon」が扱える形式に変換する
        return DateTime.fromJSDate(dateObj).
        
        // Luxonの機能を使って、日付を人間が読みやすい「中くらいの長さの形式」の文字列に変換する
        // 例: "2025年8月21日" や "Aug 21, 2025" のような形式
        toLocaleString(DateTime.DATE_MED);
    });
   return {
    dir: {
        input: "src",       // 入力フォルダを "src" に設定（デフォルトは.）
        output: "public"    // 出力フォルダを "public" に設定（デフォルトは_site）
    }
    };
}