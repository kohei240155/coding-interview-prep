/*
================================================================================
問題: 配列の要素を文字列として連結する関数を作ろう
出典: https://jsgym.shiftb.dev/q/GsBoTVaU86
================================================================================
*/

// ✅ 自分の解答
// ① 連結したい配列の定義
const words = ['JavaScript', 'is', 'awesome'];

// ② 配列を特定の文字で連結する関数の定義
// ここに関数定義を書いてください
const concatString = (words, concatWord) => {

  let result = "";

  for (let i = 0; i < words.length; i++) {
    result += words[i];

    if (i !== words.length - 1) {
      result += concatWord;
    }
  }

  return result;
}

// ③ 作成した関数を実行して結果を表示
// ここに関数実行のコードを書いてください
console.log(concatString(words, "-"));

// 📘 模範解答
// const joinArray = (arr, separator) => arr.join(separator);

// const words = ['JavaScript', 'is', 'awesome'];
// console.log(joinArray(words, '-')); // 'JavaScript-is-awesome'

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- 自分の回答は動作として問題ないが、join関数を使うことで簡潔に記述することができた
- join関数は引数に区切り文字列を設定することで、その文字を使って配列を結合することができる
- CSVデータや日付データを作るときに使用することができる
--------------------------------------------------------------------------------
*/
