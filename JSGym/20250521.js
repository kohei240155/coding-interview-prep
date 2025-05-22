/*
================================================================================
問題: 🔥数値の範囲内チェックを筋肉で判断せよ！💪
出典: https://jsgym.shiftb.dev/q/mwzzbihIBl
再提出: 不要
================================================================================
*/

// ✅ 自分の解答
// ① 範囲チェックしたい数値と、範囲の上限下限を定義
const number = 5;
const lowerBound = 1;
const upperBound = 10;

// ② お題を満たす関数の定義
// ここに範囲内かどうかを判断する関数を定義しよう！
const isInRange = (number, lowerBound, upperBound) => lowerBound <= number && number <= upperBound ? true : false;

// ③ 関数の実行と結果表示
// 作成した関数を実行して、console.logで結果を見せるんだ！
console.log(isInRange(number, lowerBound, upperBound));

// 📘 模範解答
// const isInRange = (num, lower, upper) => num >= lower && num <= upper;
// const number = 5;
// const lowerBound = 1;
// const upperBound = 10;
// console.log(isInRange(number, lowerBound, upperBound)); // true

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- 三項演算子でも実装できるが、模範解答の通り&&で判定した方がシンプルで分かりやすい
- &&は左右の両式がtrueの場合のみtrueを返却する
--------------------------------------------------------------------------------
*/
