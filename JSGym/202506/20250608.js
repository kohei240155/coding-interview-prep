/*
================================================================================
問題: 商品の在庫数を検証する関数
出典: https://jsgym.shiftb.dev/q/cf8ihXtikJ
================================================================================
*/

// ✅ 自分の解答
// ① 引数となる定数 products の定義
const products = [{ id: 1, stock: 10 }, { id: 2, stock: 0 }, { id: 3, stock: 4 }];

// ② お題を満たす関数の定義
// ここに関数のコードを書いてください。
const checkStockExisted = (products) => {
  for (let product of products) {
    if (product.stock <= 0) {
      return false;
    }
  }
  return true;
}

// ③ 作成した関数の実行と結果表示
// ここに関数実行のコードを書いてください。
console.log(checkStockExisted(products));

// 📘 模範解答
// const hasStock = (products) => products.every(product => product.stock > 0);
// const products = [{ id: 1, stock: 10 }, { id: 2, stock: 0 }, { id: 3, stock: 4 }];
// console.log(hasStock(products));

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- 存在する系のチェック関数にはhasを使ってもいいかも
- everyは配列内の全ての要素が条件を満たすかどうかをチェックできる
--------------------------------------------------------------------------------
*/
