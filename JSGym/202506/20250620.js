/*
================================================================================
問題: 文字列の先頭と末尾に特定の文字を追加する関数
出典: https://jsgym.shiftb.dev/q/L9UvziFpm7
================================================================================
*/

// ✅ 自分の解答
// 引数となる文字列と追加する文字の定義
const str = "World";
const decoration = "*";

// お題を満たす関数の定義
// ここに関数定義のコードを書いてください。
const joinDecoration = (str, decoration) => decoration + str + decoration;

// 関数の実行
// ここに関数実行のコードを書いてください。
console.log(joinDecoration(str, decoration));

// 📘 模範解答
// const addDecoration = (str, decoration) => decoration + str + decoration;
// const str = "World";
// const decoration = "*";
// console.log(addDecoration(str, decoration)); // "*World*"

/*
================================================================================
問題: 配列の中から最小値を見つける関数
出典: https://jsgym.shiftb.dev/q/ZgoqzJRrWa
================================================================================
*/

// ✅ 自分の解答
// 与えられた配列
const numbers = [7,3,9,1,4];

// ここに最小値を見つける関数を作成してください
const findMinNum = (numbers) => Math.min(...numbers);

// 作成した関数を実行して、結果をconsole.logで表示してください
console.log(findMinNum(numbers));

// 📘 模範解答
// const findMin = arr => Math.min(...arr);
// const numbers = [7,3,9,1,4];
// console.log(findMin(numbers)); // 1

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- スプレッド構文を使用すると配列の値をカンマ区切りにすることができる
--------------------------------------------------------------------------------
*/

/*
================================================================================
問題: オブジェクトのプロパティの値を取得する関数を作成しよう
出典: https://jsgym.shiftb.dev/q/E8xtPSUycA
================================================================================
*/

// ✅ 自分の解答
// ① オブジェクトの用意
const obj = { name: "佐藤", age: 55 };

// ② 関数の定義
// ここに関数定義のコードを書いてください
const getPropertyValue = (obj, str) => obj[str];

// ③ 関数の実行
// ここで関数を実行し、結果をconsole.logで表示してください
console.log(getPropertyValue(obj, "age"));

// 📘 模範解答
// const getObjValue = (obj, key) => obj[key];

// const obj = { name: "佐藤", age: 55 };
// console.log(getObjValue(obj, "age")); // 55