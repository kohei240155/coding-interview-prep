/*
================================================================================
問題: 文字列の長さを返す関数を作ろう！✨
出典: https://jsgym.shiftb.dev/q/uQBvApGt39
================================================================================
*/

// ✅ 自分の解答
// ① 引数となる文字列を定義する
const text = "Hello, World!";

// ② ここに関数を定義してね
const getStringLength = (text) => text.length;

// ③ 定義した関数を実行しよう
console.log(getStringLength(text));

// 📘 模範解答
// const getLength = str => str.length;
// const text = "Hello, World!";
// console.log(getLength(text)); // 13

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- lengthはプロパティだからlength()にする必要はない
--------------------------------------------------------------------------------
*/

/*
================================================================================
問題: クリックで色が切り替わるボタンを作ろう🌈
出典: https://jsgym.shiftb.dev/q/Ht5y9K3UWZ
================================================================================
*/

// ✅ 自分の解答
import React, { useState } from 'react';

function ColorChangerButton() {
  // ここにstateを作成して初期値を設定してください
  const colors = ['bg-gray-400', 'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500']
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  // ここにクリックで色を切り替える関数を作成してください
  const changeColor = () => {
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
  }

  return (
    <button
      onClick={changeColor}
      className={`px-4 py-2 font-semibold text-white rounded ${colors[currentColorIndex]}`}
    >
      色を変える
    </button>
  );
}

export default ColorChangerButton;

// 📘 模範解答
// import React, { useState } from 'react';

// function ColorChangerButton() {
//   const colors = ['bg-gray-400', 'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'];
//   const [currentColorIndex, setCurrentColorIndex] = useState(0);

//   const changeColor = () => {
//     setCurrentColorIndex((currentColorIndex + 1) % colors.length);
//   };

//   return (
//     <button
//       onClick={changeColor}
//       className={`px-4 py-2 font-semibold text-white rounded ${colors[currentColorIndex]}`}
//     >
//       色を変える
//     </button>
//   );
// }

// export default ColorChangerButton;

/*
================================================================================
問題: 配列の要素をすべて合計する関数を作ろう
出典: https://jsgym.shiftb.dev/q/9nI2l0OFiy
================================================================================
*/

// ✅ 自分の解答
// ① 配列を定数で定義する
const numbers = [1, 2, 3, 4, 5];

// ② 配列の要素をすべて合計して返す関数の定義
// ここに関数定義を書いてね
const sumNums = (numbers) => numbers.reduce((acc, num) => acc + num);

// ③ 関数実行と結果をconsole.logで表示
// ここに関数実行とconsole.logを書いてね
console.log(sumNums(numbers));

// 📘 模範解答
// const sumArray = arr => arr.reduce((acc, val) => acc + val, 0);
// const numbers = [1, 2, 3, 4, 5];
// console.log(sumArray(numbers)); // 15

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- reduceを使用するときは初期値を設定することを忘れずに
--------------------------------------------------------------------------------
*/
