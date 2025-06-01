/*
================================================================================
問題: 配列から重複する要素を取り除く関数を作ろう✨
出典: https://jsgym.shiftb.dev/q/eefJh7Xnc_
================================================================================
*/

// ✅ 自分の解答
// ① 引数の配列を定義
const array = [1, 2, 3, 2, 4, 1, 5];

// ② 配列から重複要素を取り除く関数を定義
// ここに関数定義のコードを書いて
const removeDuplicate = (array) => {

  const set = new Set();
  for (let item in array) {
    set.add(array[item]);
  }

  return set.forEach();
}

// ③ 関数を実行して結果を表示
// ここで関数を実行して結果をconsole.logで表示してね
console.log(removeDuplicate(array));

// 📘 模範解答A
// // ① 引数の配列を定義
// const array = [1, 2, 3, 2, 4, 1, 5];

// // ② 配列から重複要素を取り除く関数を定義
// // ここに関数定義のコードを書いて
// const removeDuplicate = (array) => {

//   const set = new Set();
//   for (let item of array) {
//     set.add(item);
//   }

//   return Array.from(set);
// }

// // ③ 関数を実行して結果を表示
// // ここで関数を実行して結果をconsole.logで表示してね
// console.log(removeDuplicate(array));

// 📘 模範解答B
// const removeDuplicates = arr => [...new Set(arr)];
// const array = [1, 2, 3, 2, 4, 1, 5];
// console.log(removeDuplicates(array)); // [1,2,3,4,5]

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- 配列の要素をループで取り出したい場合は「let item of array」のように記述する
- setは配列ではないので、Array.fromで配列に変換して返却する
--------------------------------------------------------------------------------
*/
