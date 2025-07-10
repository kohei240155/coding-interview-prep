/*
================================================================================
問題: 配列内の数値の合計を求める関数を作ろう
出典: https://jsgym.shiftb.dev/q/ZmJF2ujJmp
================================================================================
*/

// ✅ 自分の解答
// ① 配列の定義
const array = [1, 2, 3, 4, 5];

// ② 配列の各要素の合計を返す関数をここに作成
// ここに関数を定義してください
const sumNums = (array) => array.reduce((acc, item) => acc + item, 0);

// ③ 関数の実行
// 作成した関数を実行してconsole.logで結果を表示してください
console.log(sumNums(array));

// 📘 模範解答
// const sumArray = arr => arr.reduce((acc, cur) => acc + cur, 0);
// const array = [1, 2, 3, 4, 5];
// console.log(sumArray(array)); // 15