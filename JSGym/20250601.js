/*
================================================================================
問題: 入力された数値が正か負かゼロか判定する関数を作ろう！
出典: https://jsgym.shiftb.dev/q/NtXWS1CjQl
================================================================================
*/

// ✅ 自分の解答
// ① 引数となる数値の定義
const num = -5;

// ② お題を満たす関数の定義
// ここに関数定義のコードを書いてください。
const checkNumber = (num) => {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else if (num === 0) {
    return "zero";
  }
}

// ③ 関数の実行と結果の表示
// ここに作成した関数を呼び出して、結果をconsole.logで表示しましょう。
console.log(checkNumber(num));

// 📘 模範解答
// const checkNumber = num => num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';
// const num = -5;
// console.log(checkNumber(num)); // negative

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- 三項演算子を使って解くこともできる
--------------------------------------------------------------------------------
*/

/*
================================================================================
問題: 文字列の中の母音を数える関数
出典: https://jsgym.shiftb.dev/q/EkGZulTOyF
================================================================================
*/

// ✅ 自分の解答
// ① 引数となる文字列の定義
const text = "hello world";

// ② 文字列中の母音をカウントする関数の定義
// ここに関数を定義してください。
const getNumber = (text) => {

  let counter = 0;

  for (let char of text) {
    if (char.toLowerCase() ==='a') {
      counter++;
    }
    if (char.toLowerCase() === 'e') {
      counter++;
    }
    if (char.toLowerCase() === 'i') {
      counter++;
    }
    if (char.toLowerCase() === 'o') {
      counter++;
    }
    if (char.toLowerCase() === 'u') {
      counter++;
    }
  }

  return counter;
}

// ③ 関数の実行と結果の表示
// ここで関数を実行して結果をconsole.logで表示してください。
console.log(getNumber(text));

// 📘 模範解答
// const countVowels = text => text.match(/[aeiou]/gi)?.length || 0;
// const text = "hello world";
// console.log(countVowels(text)); // 3


/*
--------------------------------------------------------------------------------
📝 学んだこと:
- 問題文の繰り返しの表現に騙された
- text.matchで正規表現を使おうとしている
- /[aeiou]/giでは文字列の中のうち、全て(g)を対象に大文字、小文字を無視(i)して検索する
- 検索結果は配列形式で返却されるので、その長さを取得している
- nullだった場合のエラーに備え、オプショナルチェーン(?)を使っている
- 左辺の結果がfalsyな値だったら右辺の「0」を返却する
--------------------------------------------------------------------------------
*/
