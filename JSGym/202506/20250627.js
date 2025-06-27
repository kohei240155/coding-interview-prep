/*
================================================================================
問題: 文字列に「さん」を付ける関数
出典: https://jsgym.shiftb.dev/q/ZUV18uojVB
================================================================================
*/

// ✅ 自分の解答
// ① 引数となる定数の定義
const name = "山下";

// ② お題を満たす関数の定義
// ここに関数定義のコードを書いてください。
const addSan = (name) => name + "さん";

// ③ 関数の実行
// ここに関数実行のコードを書いてください。
console.log(addSan(name));

// 📘 模範解答
// const addSan = name => `${name}さん`;
// console.log(addSan("山下")); // 山下さん

/*
================================================================================
問題: 数値を10倍にする関数を作成しよう
出典: https://jsgym.shiftb.dev/q/UcKurcr5Mf
================================================================================
*/

// ✅ 自分の解答
//数値を準備
const number = 3;

//数値を10倍にする関数をここに作成してください
const tenMultiple = (number) => number * 10;

//作成した関数を実行して結果をconsole.logで確認してください
console.log(tenMultiple(number));

// 📘 模範解答
// const multiplyByTen = num => num * 10;
// const number = 3;
// console.log(multiplyByTen(number)); // 30

/*
================================================================================
問題: 入力された文字列を逆順にする関数を作ろう
出典: https://jsgym.shiftb.dev/q/7Pyk9n74es
================================================================================
*/

// ✅ 自分の解答
// ① 引数となる定数の定義
const text = "hello";

// ② お題を満たす関数の定義
// ここに関数定義のコードを書いてください。
const reverseString = (text) => text.split('').reverse().join('');

// ③ 関数の実行と結果の表示
// ここに関数を実行してconsole.logで結果を出力してください。
console.log(reverseString(text));

// 📘 模範解答
// const reverseString = str => str.split('').reverse().join('');
// const text = "hello";
// console.log(reverseString(text)); // "olleh"

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- 文字列はsplit関数を使うことで配列形式に変換できる
- reverseを使うと配列を逆順に並べることができる
- joinを使って配列形式に分解した文字をくっつける
- joinの引数に「''」を指定すると空文字で結合するという意味になる
--------------------------------------------------------------------------------
*/

/*
================================================================================
問題: 数値を足して気合いを入れよう！
出典: https://jsgym.shiftb.dev/q/F2rDyPcUF6
================================================================================
*/

// ✅ 自分の解答
// ①引数となる配列の定義
const numbers = [1, 2, 3, 4, 5];

// ②要素の合計を計算する関数の定義
// ここに関数定義のコードを書いてください
const sumNumbers = (numbers) => numbers.reduce((acc, num) => num + acc, 0);

// ③関数の実行と結果の表示
// ここで関数を実行し、console.logで結果を表示してください
console.log(sumNumbers(numbers));

// 📘 模範解答
// const sumNumbers = nums => nums.reduce((a, b) => a + b, 0);
// const numbers = [1, 2, 3, 4, 5];
// console.log(sumNumbers(numbers)); // 15

/*
================================================================================
問題: 入力したカラーコードで色を表示しよう🌈
出典: https://jsgym.shiftb.dev/q/7bcHT1efDP
================================================================================
*/

// ✅ 自分の解答
import React, {useState} from 'react';

function ColorDisplay() {
  // 状態を管理するコードを書いてください。
  const [currentColor, setCurrentColor] = useState('');

  const handleInput = (e) => {
    setCurrentColor(e.target.value);
  }

  // カラーコードの入力 / 表示を行うフォームと div要素を作成してください。
  return (
    <div>
      <input
        type="text"
        className="border p-3 m-4"
        placeholder="カラーコードを入力"
        onChange={handleInput}
        >
      </input>
      <div
        className="m-4 p-20 w-15 h-15"
        style={{backgroundColor: currentColor}}
      >
      </div>
    </div>
  )
}

export default ColorDisplay;

// 📘 模範解答
// import React, { useState } from 'react';

// function ColorDisplay() {
//   const [color, setColor] = useState('');

//   return (
//     <div className="p-4">
//       <input
//         type="text"
//         value={color}
//         onChange={(e) => setColor(e.target.value)}
//         placeholder="カラーコードを入力"
//         className="border p-2 mb-4"
//       />
//       <div
//         className="w-40 h-40"
//         style={{ backgroundColor: color || 'transparent' }}
//       ></div>
//     </div>
//   );
// }

// export default ColorDisplay;

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- inputタグのonChangeで直接setColorを実行してもよい
- style指定ではtailwindではなく、DOMのスタイルオブジェクトに定義されたstyleを使うとよい
--------------------------------------------------------------------------------
*/
