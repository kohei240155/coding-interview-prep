/*
================================================================================
問題: 🔥摂取カロリーを筋肉で管理！摂取食品の合計カロリーを計算する関数を作れ！💪
出典: https://jsgym.shiftb.dev/q/uaNvw4lj-G
================================================================================
*/

// ✅ 自分の解答
// ①食品リストの配列を定義
const foods = [
  { name: "ステーキ", calories: 350 },
  { name: "サラダ", calories: 50 }
];

// ②摂取した食品の総カロリーを計算する関数を作成
// ここに関数作成のコードを書いてください。
const totalCalories = foods => foods.reduce((acc, food) => acc + food.calories, 0);

// ③作成した関数を実行し、結果を表示
// ここに関数実行のコードを書いてください。
console.log(totalCalories(foods));

// 📘 模範解答
// const totalCalories = foods => foods.reduce((acc, food) => acc + food.calories, 0);
// const foods = [
//   { name: "ステーキ", calories: 350 },
//   { name: "サラダ", calories: 50 }
// ];
// console.log(totalCalories(foods)); // 出力: 400
