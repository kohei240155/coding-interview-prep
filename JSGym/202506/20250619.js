/*
================================================================================
問題: 配列から特定の要素を削除する関数を作ろう✨
出典: https://jsgym.shiftb.dev/q/2ayojTY3xH
================================================================================
*/

// ✅ 自分の解答
// ① 配列と削除したい要素を定義
const fruits = ["りんご", "バナナ", "オレンジ", "バナナ"];
const removeFruit = "バナナ";

// ② お題を満たす関数の定義
// ここに関数定義のコードを書いてください。
const getFruitsList = (fruits, removeFruit) => fruits.filter((item) => item !== removeFruit);

// ③ 関数を実行して結果表示
// ここに関数実行とconsole.logのコードを書いてください。
console.log(getFruitsList(fruits, removeFruit));

// 📘 模範解答
// const removeElement = (arr, element) => arr.filter(item => item !== element);
// const fruits = ["りんご", "バナナ", "オレンジ", "バナナ"];
// const result = removeElement(fruits, "バナナ");
// console.log(result);  // ["りんご", "オレンジ"]

/*
================================================================================
問題: 文字列から特定の単語をカウントする関数
出典: https://jsgym.shiftb.dev/q/JtbqCzNDKA
================================================================================
*/

// ✅ 自分の解答
//① 文字列を引数として関数を定義してください。
// ここに関数定義のコードを書きましょう
const count = (sampleText) => (sampleText.match(/JavaScript/g) || []).length;

//② 定数の宣言
const sampleText = "JavaScriptが好きです。私はJavaScriptを毎日書きます。";

//③ 作成した関数を実行し結果を出力してください。
// ここに関数実行と出力のコードを書きましょう
console.log(count(sampleText));

// 📘 模範解答
// function countOccurrences(text) { return (text.match(/JavaScript/g) || []).length; }
// const sampleText = "JavaScriptが好きです。私はJavaScriptを毎日書きます。";
// console.log(countOccurrences(sampleText)); // 2

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- 正規表現は//で囲んで表現する
- gはGlobalの意味で、文字列の中で複数回マッチする場合でも数を数えてくれる
- 正規表現との一致にはmatch関数を使用し、一致した文字列が配列形式で返却される
- もし、一致する値がない場合はnullが返却される
- nullをlengthで数えようとするとエラーが発生するので「|| []」のようにしている
--------------------------------------------------------------------------------
*/
