/*
================================================================================
問題: お買い物計算：割引価格を計算する関数を作ろう！🛒🎉
出典: https://jsgym.shiftb.dev/q/EjIigjatyK
================================================================================
*/

// ✅ 自分の解答
// ① 元の価格と割引率を与える
const price = 1000;
const discountRate = 20;

// ② 割引後の価格を計算する関数を定義
// ここに書いてね！
const calcDiscountedPrice = (price, discountRate) => {
  return price * (1 - (0.01 * discountRate));
}

// ③ 作成した関数を実行して結果を表示
// ここで関数を実行して結果を表示しよう！
console.log(calcDiscountedPrice(price, discountRate));

// 📘 模範解答
// const calculateDiscount = (price, discountRate) => price - (price * discountRate / 100);

// console.log(calculateDiscount(1000, 20)); // 800
