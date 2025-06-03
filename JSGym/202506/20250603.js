/*
================================================================================
問題: 購入履歴から合計支出額を計算する関数を作成しましょう
出典: https://jsgym.shiftb.dev/q/HhWZHBpugl
================================================================================
*/

// ✅ 自分の解答
// ① 引数となる定数の定義
const history = [
  { price: 1000 },
  { price: 2500 },
  { price: 3200 }
];

// ② お題を満たす関数の定義
// 「history」配列内の各オブジェクトのpriceを合計する関数を作成
const getTotalPrice = (history) => history.reduce((acc, item) => acc += item.price, 0);

// ③ 関数の実行
// 結果をconsole.logで表示
console.log(getTotalPrice(history));

// 📘 模範解答
// const calculateTotal = items => items.reduce((total, item) => total + item.price, 0);
// const history = [{price: 1000}, {price: 2500}, {price: 3200}];
// console.log(calculateTotal(history)); // 6700

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- reduceを使った場合、戻り値がaccの値になるので「acc += item.price」のように書かない方がいい
--------------------------------------------------------------------------------
*/
