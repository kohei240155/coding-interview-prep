/*
================================================================================
問題: 配列内の数値をすべて正の数に変換する関数を作りましょう
出典: https://jsgym.shiftb.dev/q/nSDHg5TqMp
================================================================================
*/

// ✅ 自分の解答
// ① 引数となる配列の定義
const numbers = [-3, 5, -1, 0, -4];

// ② 関数の定義
// 与えられた配列内の数値をすべて正の数にして返す関数を定義してください。
const convertNumToAbs = (numbers) => numbers.map((num) => Math.abs(num));

// ③ 関数の実行と結果の表示
// 定義した関数を呼び出し、結果をconsole.logで表示してください。
console.log(convertNumToAbs(numbers));

// 📘 模範解答
// const toAbsoluteArray = arr => arr.map(num => Math.abs(num));
// const numbers = [-3, 5, -1, 0, -4];
// console.log(toAbsoluteArray(numbers)); // [3, 5, 1, 0, 4]

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- Math.absを使うと数値を絶対値に変換することができる
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
  // 入力テキストの状態を管理するuseStateを設定しましょう
  const [text, setText] = useState('');

  // 文字数に応じてバーの長さを設定しましょう（最大文字数は100文字）
  const handleTextChange = (event) => {
    setText(event.target.value);
  }

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
          style={{ width: `${progressPercentage}%`}}>
        </div>
      </div>
      <p className="text-right text-sm mt-1">{text.length}/100文字</p>
    </div>
  );
}

export default TextProgress;

// 📘 模範解答
// import React, { useState } from 'react';

// function TextProgress() {
//   const [text, setText] = useState('');

//   const handleTextChange = (event) => {
//     setText(event.target.value);
//   };

//   const progressPercentage = Math.min(text.length, 100);

//   return (
//     <div className="w-full max-w-md mx-auto">
//       <input
//         type="text"
//         placeholder="ここに文字を入力..."
//         className="border p-2 w-full"
//         value={text}
//         onChange={handleTextChange}
//       />
//       <div className="mt-4 w-full bg-gray-200 rounded">
//         <div
//           className="bg-blue-500 text-xs leading-none rounded text-center h-4"
//           style={{ width: `${progressPercentage}%` }}
//         ></div>
//       </div>
//       <p className="text-right text-sm mt-1">{text.length}/100文字</p>
//     </div>
//   );
// }

// export default TextProgress;

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- フォームに対してイベントが発生するとonChangeが起動する
- 対象のメソッドが呼び出され、eventからフォームに対する値を取得することができる
- その値はevent.target.valueとして取得することができ、これはReactが管理するイベント
\\
--------------------------------------------------------------------------------
*/
