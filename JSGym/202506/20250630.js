/*
================================================================================
問題: 与えられた文字列を小文字に変換する関数
出典: https://jsgym.shiftb.dev/q/k3T87TMubd
================================================================================
*/

// ✅ 自分の解答
// ① 引数として渡す文字列を定義
const text = "HELLO";

// ② ここに関数定義のコードを書いてください
const upperString = (text) => text.toLowerCase();

// ③ 定義した関数を実行して、結果をconsole.logで表示してください
console.log(upperString(text));

// 📘 模範解答
// const toLowerCase = str => str.toLowerCase();
// const text = "HELLO";
// console.log(toLowerCase(text)); // "hello"