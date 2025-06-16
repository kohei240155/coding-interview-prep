/*
================================================================================
問題: 🌟文字列の先頭に特定の文字を追加しちゃう関数を作ろう✨
出典: https://jsgym.shiftb.dev/q/EyPNsLAcfT
================================================================================
*/

// ✅ 自分の解答
// ① 文字列を定義
const str = "Hello";

// ② 追加したい先頭の文字を定義
const prefix = "*";

// ③ 与えられた文字列の先頭に特定の文字を追加する関数を作成
// ここに関数を書く
const concatString = (str, prefix) => prefix + str;

// ④ 作成した関数を呼び出して結果を表示
// ここで関数を実行して結果をconsole.logで表示する
console.log(concatString(str, prefix));

// 📘 模範解答
// const addPrefix = (str, prefix) => prefix + str;

// const result = addPrefix("Hello", "*");
// console.log(result); // *Hello