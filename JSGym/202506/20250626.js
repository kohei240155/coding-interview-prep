/*
================================================================================
問題: 筋肉アップ！数値を5倍にする関数を作ろう💪🔥
出典: https://jsgym.shiftb.dev/q/199SZUkPMF
================================================================================
*/

// ✅ 自分の解答
// 引数となる定数の定義
const number = 4;

// 数値を5倍にして返す関数の定義
// ここに関数定義のコードを書いてください。
const timesFive = (number) => number * 5;

// 関数の実行と結果の表示
// ここに関数実行のコードを書いてください。
console.log(timesFive(number));

// 📘 模範解答
// const quintuple = num => num * 5;
// const number = 4;
// console.log(quintuple(number)); // 20

/*
================================================================================
問題: リアルタイムでいいね！ボタンを作ろう👍
出典: https://jsgym.shiftb.dev/q/4nYVKIvY42
================================================================================
*/

// ✅ 自分の解答
import React, {useState} from 'react';

function LikeButton() {
  // いいねのカウントを管理するためのstateを作成してください
  const [count, setCount] = useState(0);

  // ボタンクリック時にカウントを増やす関数を作成してください
  const countUp = () => {
    setCount(count + 1);
  }

  return (
    <div className="p-4">
      <div className="mb-2">いいね数: {count}</div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={countUp}>
        いいね！
      </button>
    </div>
  );
}

export default LikeButton;

// 📘 模範解答
// import React, { useState } from 'react';

// function LikeButton() {
//   const [likes, setLikes] = useState(0);

//   const incrementLikes = () => {
//     setLikes(likes + 1);
//   };

//   return (
//     <div className="p-4">
//       <p className="mb-2">いいね数: {likes}</p>
//       <button onClick={incrementLikes} className="bg-blue-500 text-white px-4 py-2 rounded">
//         いいね！
//       </button>
//     </div>
//   );
// }

// export default LikeButton;
