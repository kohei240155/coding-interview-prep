/*
================================================================================
問題:
出典:
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
