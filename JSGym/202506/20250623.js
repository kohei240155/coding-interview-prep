/*
================================================================================
問題: 引数として受け取った数値の絶対値を返す関数を作ろう！
出典: https://jsgym.shiftb.dev/q/LUwpQPeSt6
================================================================================
*/

// ✅ 自分の解答
// ① 引数となる定数の定義
const number = -5;

// ② 数値の絶対値を返す関数の定義
// ここに関数定義のコードを書いてください。
const calcAbs = (number) => Math.abs(number);

// ③ 関数の実行と結果の表示
// ここに①と②を利用して関数を実行し、その結果をconsole.logで表示するコードを書いてください。
console.log(calcAbs(number));

// 📘 模範解答
// const getAbsolute = num => Math.abs(num);
// const number = -5;
// console.log(getAbsolute(number)); // 5