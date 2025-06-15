/*
================================================================================
問題: 文字列から先頭・末尾の空白を削除する関数
出典: https://jsgym.shiftb.dev/q/0oKseWvatY
================================================================================
*/

// ✅ 自分の解答
// ①関数の定義
function trimText(text) {
  // ここに文字列から空白を削除するコードを記述してください。
  return text.trim();
}

// ②関数の実行と結果の確認
const sampleText = "  Hello World!  ";
console.log(trimText(sampleText)); // 実行結果を表示してください

// 📘 模範解答
// function trimText(text) {
//   return text.trim();
// }

// const sampleText = "  Hello World!  ";
// console.log(trimText(sampleText)); // "Hello World!"

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- trimは文字列の前後にあるスペースを取り除くことができる
- 半角スペースやタブ、改行などにスペースっぽいものに対して対応してくれる
--------------------------------------------------------------------------------
*/

/*
================================================================================
問題: 🔥筋肉配列を間隔広く並べる関数を作ろう！！💪
出典: https://jsgym.shiftb.dev/q/vqTyIWaju9
================================================================================
*/

// ✅ 自分の解答
// ①定数を定義する
const exercises = ['スクワット', 'ベンチプレス', 'デッドリフト'];
const separator = '-';

// ②お題を満たす関数の定義
// ここに関数定義のコードを書いてください
const joinString = (exercises, separator) => exercises.join(separator);

// ③作った関数を実行し、結果をconsole.logで表示する
// 関数を実行して表示するコードを書いてください
console.log(joinString(exercises, separator));

// 📘 模範解答
// const joinExerciseNames = (arr, separator) => arr.join(separator);

// console.log(joinExerciseNames(['スクワット', 'ベンチプレス', 'デッドリフト'], '-')); //スクワット-ベンチプレス-デッドリフト

/*
================================================================================
問題: オブジェクト内の数値を合計する関数で筋肉を強化せよ！💪
出典: https://jsgym.shiftb.dev/q/ePEz1H3cAb
================================================================================
*/

// ✅ 自分の解答
// オブジェクトの定義
const object = {a: 10, b: 20, c: 30};

// ここに関数を定義して、オブジェクト内の数値を合計して返す
const sumNums = (object) => {
  return Object.values(object).reduce((acc, val) => acc + val, 0);
}

// 作成した関数を実行して、その結果をconsole.logで表示しよう！
console.log(sumNums(object));

// 📘 模範解答
// const sumValues = obj => Object.values(obj).reduce((acc, cur) => acc + cur, 0);
// const object = {a: 10, b: 20, c: 30};
// console.log(sumValues(object)); // 60
/*
--------------------------------------------------------------------------------
📝 学んだこと:
- オブジェクトの値を配列として取り出したい場合にObject.Valuesを使う
- Object.Valuesはオブジェクトの1階層目しか見ないので注意すること
--------------------------------------------------------------------------------
*/
