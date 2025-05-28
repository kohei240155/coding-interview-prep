/*
================================================================================
問題: 階乗を計算する関数を作りましょう✨
出典: https://jsgym.shiftb.dev/q/lb6-BF1qiP
結果: 正解
================================================================================
*/

// ✅ 自分の解答
// ① 引数の定義
const num = 4;

// ② 階乗を計算する関数を定義する
// ここに階乗を計算する関数を書いてください。
const calc = (num) => {

  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

// ③ 作成した関数を実行して結果を表示
// ここから関数を実行して、結果をconsole.logで表示してください。
console.log(calc(num));

// 📘 模範解答
// const factorial = num => num <= 1 ? 1 : num * factorial(num - 1);

// const num = 4;
// console.log(factorial(num)); // 24

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- 自分の回答のようにFor文を使って回答できるが再帰を使っても回答できる
- 値を評価後に再度同じ関数を呼び出すことで再帰として処理することができる
- num <= 1の条件がないと永遠に呼び出されてしまうので注意する
--------------------------------------------------------------------------------
*/

/*
================================================================================
問題: 商品リストから指定された価格以下のモノだけ探し出しちゃおう🔍✨
出典: https://jsgym.shiftb.dev/q/y2lou176sQ
結果: 正解
================================================================================
*/

// ✅ 自分の解答
// ① 商品リストの定義
const products = [{name: "スマホ", price: 30000}, {name: "パソコン", price: 120000}, {name: "タブレット", price: 50000}];

// ② 価格を指定
const maxPrice = 50000;

// ③ お題を満たす関数の定義
// 特定の価格以下の商品を探す関数をここに記述してね
const sortedItems = (products, maxPrice) => products.filter((product) => maxPrice >= product.price);

// ④ 関数の実行
// 探し出した商品の配列をここでconsole.logで表示して確認
console.log(sortedItems(products, maxPrice));

// 📘 模範解答
// const findAffordableProducts = (products, maxPrice) => {
//   return products.filter(product => product.price <= maxPrice);
// };

// const products = [
//   {name: "スマホ", price: 30000},
//   {name: "パソコン", price: 120000},
//   {name: "タブレット", price: 50000}
// ];

// const maxPrice = 50000;

// console.log(findAffordableProducts(products, maxPrice));

/*
================================================================================
問題: 🔥筋肉計算！BMIを求める関数を作ろう！💪
出典: https://jsgym.shiftb.dev/q/G6HiVQB0jb
結果:
================================================================================
*/

// ✅ 自分の解答
// ① 定数として身長(m)と体重(kg)を定義
const height = 1.75;
const weight = 68;

// ② BMIを計算して返す関数を作成
// ここに関数のコードを書いてください。
const calcBmi = (height, weight) => (weight / (height * height)).toFixed(1) ;

// ③ 定義した関数を使ってBMIを計算し、結果をconsole.logで表示
// ここに関数の実行コードを書いてください。
console.log(calcBmi(height, weight));

// 📘 模範解答
// const calcBMI = (height, weight) => {
//   return (weight / (height * height)).toFixed(1);
// };

// const height = 1.75;
// const weight = 68;

// console.log(calcBMI(height, weight)); // 22.2

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- toFiexed()は指定した小数点以下まで四捨五入することができる
- 戻り値はStringになるので、数値で戻す必要がある場合は変換処理が必要
- 金額表示などで小数点〇桁まで表示したい場合などで使われる
--------------------------------------------------------------------------------
*/
