/*
================================================================================
問題: オブジェクトのプロパティの存在をチェックする関数を作ろう✨
出典: https://jsgym.shiftb.dev/q/UG6aXGR4v1
================================================================================
*/

// ✅ 自分の解答
// ① 引数で渡すオブジェクトとプロパティ名の定義
const user = {name: "原田", age: 28};
const propName = "age";

// ② オブジェクトにプロパティが存在するか判断する関数を定義
// ここに関数定義のコードを書いてください。
const hasProparty = (user, propName) => user.hasOwnProperty(propName);

// ③ 作成した関数を実行して結果を表示
// ここに関数の実行結果をconsole.logで表示してください。
console.log(hasProparty(user, propName));

// 📘 模範解答
// const checkPropertyExists = (obj, propName) => obj.hasOwnProperty(propName);
// const user = {name: "原田", age: 28};
// const propName = "age";
// console.log(checkPropertyExists(user, propName)); // true

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- オブジェクトが指定したプロパティを持っているかどうかはhasOwnPropertyでチェックできる
--------------------------------------------------------------------------------
*/
