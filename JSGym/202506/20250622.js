/*
================================================================================
問題: 🔥文字列の末尾を筋肉で飾る関数を作り上げろ！
出典: https://jsgym.shiftb.dev/q/GyM4BJ0zm8
================================================================================
*/

// ✅ 自分の解答
// 筋肉でパワーアップさせるための文字列
defaultString = "Hello World";

// ここに文字列の最後に筋肉💪をつける関数を定義する
const addMustle = (defaultString) => defaultString + "💪";

// 作った関数を使って実行結果をconsole.logで表示するぞ！
console.log(addMustle(defaultString));

// 📘 模範解答
// // 受け取った文字列の末尾に筋肉の絵文字を追加する関数
// function addMuscle(str) {
//   return str + "💪";
// }

// // 作った関数で実行して筋肉を表示する
// console.log(addMuscle("Hello World")); // "Hello World💪"