/*
================================================================================
問題: 数値が偶数か奇数かを判定する関数を作成しましょう
出典: https://jsgym.shiftb.dev/q/xiyl-0Jg4Z
================================================================================
*/

// ✅ 自分の解答
// ① 判定対象の定数を定義
const number = 5;

// ② 偶数・奇数を判定する関数を定義
// ここに判断関数のコードを書いてください
const checkNumber = (number) => number % 2 === 0 ? '偶数' : '奇数';


// ③ 定義した関数を使って結果をconsole.logで表示
// ここに関数実行のコードを書いてください
console.log(checkNumber(number));

// 📘 模範解答
// const checkEvenOdd = n => n % 2 === 0 ? '偶数' : '奇数';
// const number = 5;
// console.log(checkEvenOdd(number)); // 奇数

/*
================================================================================
問題: 文字列内の特定の単語を置き換える関数を作ろう🌟
出典: https://jsgym.shiftb.dev/q/_GyIIodY6E
================================================================================
*/

// ✅ 自分の解答
// ① 文字列を受け取る定数の定義
const sentence = "私はJSが大好きです";
const before = "JS";
const after = "JavaScript";

// ② 特定単語を置き換える関数の定義
// ここに置き換え処理をする関数を書いてください
const replaceWord = (sentence, before, after) => sentence.replace(before, after);

// ③ 関数の実行
// 作成した関数をここで実行して、console.logで結果を表示してください
console.log(replaceWord(sentence, before, after));

// 📘 模範解答
// const replaceWord = (str, oldWord, newWord) => str.replace(oldWord, newWord);
// const sentence = "私はJSが大好きです";
// console.log(replaceWord(sentence, "JS", "JavaScript")); // "私はJavaScriptが大好きです"

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- oldWord、newWordという命名にするべきだった
--------------------------------------------------------------------------------
*/
