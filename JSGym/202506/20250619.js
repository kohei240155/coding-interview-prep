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