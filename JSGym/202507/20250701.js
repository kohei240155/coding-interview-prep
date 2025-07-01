/*
================================================================================
問題: 配列の要素数を返す関数
出典: https://jsgym.shiftb.dev/q/FX_4k0xM3k
================================================================================
*/

// ✅ 自分の解答
// ① 引数となる定数の定義
const array = [1, 2, 3, 4, 5];

// ② お題を満たす関数の定義
// ここに関数を定義してください。
const getLength = (array) => array.length;

// ③ 関数の実行と結果の表示
// 上記の関数を実行し、結果をconsole.logを使って表示してください。
console.log(getLength(array));

// 📘 模範解答
// const arrayLength = arr => arr.length;
// const array = [1, 2, 3, 4, 5];
// console.log(arrayLength(array)); // 5