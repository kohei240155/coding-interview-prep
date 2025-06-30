/*
================================================================================
問題: 配列内の最大値を求める関数を作ろう
出典: https://jsgym.shiftb.dev/q/ody2wToiB2
================================================================================
*/

// ✅ 自分の解答
// ① 引数となる配列を定義
const numbers = [1, 3, 7, 2, 5];

// ② お題を満たす関数の定義
// ここに関数定義のコードを書いてください。
const getMaxNum = (numbers) => Math.max(...numbers);

// ③ 作成した関数を実行
// ここに関数実行のコードを書き、console.logで結果を表示してください。
console.log(getMaxNum(numbers));

// 📘 模範解答
// const getMaxValue = arr => Math.max(...arr);
// const numbers = [1, 3, 7, 2, 5];
// console.log(getMaxValue(numbers)); // 7

/*
================================================================================
問題: 文字列の最初と最後を結合する関数
出典: https://jsgym.shiftb.dev/q/cuI7T5gxDa
================================================================================
*/

// ✅ 自分の解答
// ① 引数となる定数の定義
const str = "Hello";

// ② お題を満たす関数の定義
// ここに関数定義のコードを書いてください。
const concatStr = (str) => str[0] + str[str.length - 1];

// ③ 関数の実行
// ここに関数実行のコードを書いてください。
console.log(concatStr(str));

// 📘 模範解答
// const combineFirstAndLast = str => str[0] + str[str.length - 1];
// const str = "Hello";
// console.log(combineFirstAndLast(str)); // "Ho"
