/*
================================================================================
問題: 配列から文字列を検索して位置を返す関数を作成しましょう
出典: https://jsgym.shiftb.dev/q/guiLAiNHqk
================================================================================
*/

// ✅ 自分の解答
// ① 引数となる配列と検索したい文字列の定義
const fruits = ["りんご", "ばなな", "ぶどう"];
const searchFruit = "ばなな";

// ② お題を満たす関数の定義
// 配列と検索対象の文字列を受け取り、配列内の該当する位置を返す関数を定義してください
const findString = (fruits, searchFruit) => {

  for (let idx in fruits) {

    if (fruits[idx] === searchFruit) {
      return idx;
    }
  }
  return -1;
}

// ③ 関数の実行
// 作成した関数を実行して結果をconsole.logで表示してください
console.log(findString(fruits, searchFruit));

// 📘 模範解答
// const findIndex = (array, value) => array.indexOf(value);
// const fruits = ["りんご", "ばなな", "ぶどう"];
// const searchFruit = "ばなな";
// console.log(findIndex(fruits, searchFruit)); // 1

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- indexOfを使うと引数に設定した値と完全一致する値のインデックスを返却してくれる
--------------------------------------------------------------------------------
*/
