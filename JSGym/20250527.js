/*
================================================================================
問題: 🔥筋肉チェック！！配列内のすべての要素が同じか検証だ💪
出典: https://jsgym.shiftb.dev/q/2uPpImPHDs
結果: 正解
================================================================================
*/

// ✅ 自分の解答
// ここに配列の定義を書こう
const array = ["筋肉", "筋肉", "筋肉"];

// すべての要素が同じか検証する関数の定義だ！
// ここに関数を定義しろ！
const checkValues = (array) => {

  const targetValue = array[0];
  let isSame = true;

  array.forEach((item) => {
    if (item !== targetValue) {
      isSame = false;
    }
  })

  if (!isSame) {
    return false;
  }
    return true;
}

// 筋肉チェック🔥 関数を実行し結果をconsole.logで表示しよう
// ここに関数の実行とconsole.logを書け！
console.log(checkValues(array));

// 📘 模範解答
// const isUniform = array => array.every(item => item === array[0]);
// const array = ["筋肉", "筋肉", "筋肉"];
// console.log(isUniform(array)); // true

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- 単純な配列の繰り返し処理を行いたい場合はarray.ForEachを使用できる
- forEachの引数に渡す関数はコールバック関数と呼ぶ
- コールバック関数内でreturnを記述しても全体の繰り返しは止まらないので注意する
- array.every()は配列の要素が全て条件を満たす場合にtrueを返す
--------------------------------------------------------------------------------
*/
