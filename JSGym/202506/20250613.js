/*
================================================================================
問題: 日付フォーマットを整える関数を作成しよう！
出典: https://jsgym.shiftb.dev/q/1aThUXHE5f
================================================================================
*/

// ✅ 自分の解答
  // ① 関数に渡す日付オブジェクトの生成
  const date = new Date('2023-11-05');

  // ② 日付フォーマットを変換する関数の定義
  // ここに関数のコードを書いてください
  const formatDate = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}/${m}/${d}`;
  };
  // ③ 関数の呼び出し
  // ここで関数を呼び出し、結果をconsole.logで表示してください
  console.log(formatDate(date));

// 📘 模範解答
// const formatDate = (date) => `${date.getFullYear()}/${('0' + (date.getMonth() + 1)).slice(-2)}/${('0' + date.getDate()).slice(-2)}`;
// const date = new Date('2023-11-05');
// console.log(formatDate(date)); // 2023/11/05

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- getMonthは1月～12月を返却するが、0~11で値を返すので+1する必要がある
- padStartは第一引数に全体で必要な文字数を指定し、第二引数は必要な文字の文だけ指定した文字で埋める
- getDateは1~31で値を返却するのでgetMonthと違って+1する必要はない
--------------------------------------------------------------------------------
*/
