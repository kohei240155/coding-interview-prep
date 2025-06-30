/*
================================================================================
問題: 数値を3倍にする関数で筋肉も3倍！？💪
出典: https://jsgym.shiftb.dev/q/W725_wVvdN
================================================================================
*/

// ✅ 自分の解答
// ① 引数となる定数の定義
const number = 3;

// ② お題を満たす関数の定義
// ここに関数定義のコードを書いてください。
const multipleNum = (number) => number * 3;

// ③ 関数の実行と結果の表示
// ここに関数を実行して結果をconsole.logで表示してください。
console.log(multipleNum(number));

// 📘 模範解答
// const triple = num => num * 3;
// const number = 3;
// console.log(triple(number)); // 9

/*
================================================================================
問題: 数字が3の倍数か判定する関数を作ろう！
出典: https://jsgym.shiftb.dev/q/DSg_n5n5GL
================================================================================
*/

// ✅ 自分の解答
// ① 数値を定義します
const inputNumber = 9;

// ② 数値が3の倍数か判定する関数を作成しましょう
// ここに関数を記述してください
const isDivideThree = (inputNumber) => inputNumber % 3 === 0;

// ③ 関数を実行して結果をconsole.logで出力しましょう
// ここに関数の実行を記述してください
console.log(isDivideThree(inputNumber));

// 📘 模範解答
// const isMultipleOfThree = number => number % 3 === 0;
// const inputNumber = 9;
// console.log(isMultipleOfThree(inputNumber)); // true
