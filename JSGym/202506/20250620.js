/*
================================================================================
問題: 文字列の先頭と末尾に特定の文字を追加する関数
出典: https://jsgym.shiftb.dev/q/L9UvziFpm7
================================================================================
*/

// ✅ 自分の解答
// 引数となる文字列と追加する文字の定義
const str = "World";
const decoration = "*";

// お題を満たす関数の定義
// ここに関数定義のコードを書いてください。
const joinDecoration = (str, decoration) => decoration + str + decoration;

// 関数の実行
// ここに関数実行のコードを書いてください。
console.log(joinDecoration(str, decoration));

// 📘 模範解答
// const addDecoration = (str, decoration) => decoration + str + decoration;
// const str = "World";
// const decoration = "*";
// console.log(addDecoration(str, decoration)); // "*World*"