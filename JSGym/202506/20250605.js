/*
================================================================================
問題: 筋トレカウンター🔥 ゼロから指定回数までカウントアップする関数💪
出典: https://jsgym.shiftb.dev/q/ze8WkgHbh1
================================================================================
*/

// ✅ 自分の解答
// ① 指定回数の定数
const targetNumber = 5;

// ② ゼロから指定された回数までの配列を返す関数
// ここに関数定義を書いてください
const countUpList = (targetNumber) => {
  let list = [];
  for (let i = 0; i <= targetNumber; i++) {
    list.push(i);
  }
  return list;
}

// ③ 関数を実行して結果をconsole.logで表示
// ここに関数を実行するコードを書いてください
console.log(countUpList(targetNumber));

// 📘 模範解答
// const countUpArray = n => [...Array(n + 1).keys()];

// const targetNumber = 5;
// console.log(countUpArray(targetNumber)); // [0, 1, 2, 3, 4, 5]

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- Array(n + 1)はn + 1の空の配列を生成している
- keys()は配列のインデックスを順番に取り出すことができる
- スプレッド構文を使って配列として返却している
--------------------------------------------------------------------------------
*/

/*
================================================================================
問題: 入力文字数に応じてプログレスバーを表示しよう📊
出典: https://jsgym.shiftb.dev/q/3f-chppc1B
================================================================================
*/

// ✅ 自分の解答
import React, { useState } from 'react';

function TextProgress() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const progressPercentage = Math.min(text.length, 100);

  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="ここに文字を入力..."
        className="border p-2 w-full"
        value={text}
        onChange={handleTextChange}
      />
      <div className="mt-4 w-full bg-gray-200 rounded">
        <div
          className="bg-blue-500 text-xs leading-none rounded text-center h-4"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <p className="text-right text-sm mt-1">{text.length}/100文字</p>
    </div>
  );
}

export default TextProgress;

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- Math.min()では引数の値のうち、小さい方の値を返す
- 「w-full max-w-md max-auto」は定番の組み合わせ
- leading-noneは行間をなくす指定
--------------------------------------------------------------------------------
*/
