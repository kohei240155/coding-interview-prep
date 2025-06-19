/*
================================================================================
問題: オブジェクトのプロパティの存在をチェックする関数を作ろう✨
出典: https://jsgym.shiftb.dev/q/UG6aXGR4v1
================================================================================
*/

// ✅ 自分の解答
// ① 引数で渡すオブジェクトとプロパティ名の定義
const user = {name: "原田", age: 28};
const propName = "age";

// ② オブジェクトにプロパティが存在するか判断する関数を定義
// ここに関数定義のコードを書いてください。
const hasProparty = (user, propName) => user.hasOwnProperty(propName);

// ③ 作成した関数を実行して結果を表示
// ここに関数の実行結果をconsole.logで表示してください。
console.log(hasProparty(user, propName));

// 📘 模範解答
// const checkPropertyExists = (obj, propName) => obj.hasOwnProperty(propName);
// const user = {name: "原田", age: 28};
// const propName = "age";
// console.log(checkPropertyExists(user, propName)); // true

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- オブジェクトが指定したプロパティを持っているかどうかはhasOwnPropertyでチェックできる
--------------------------------------------------------------------------------
*/

/*
================================================================================
問題: 選択に応じて動的にCSSクラスを切り替えよう🎨
出典: https://jsgym.shiftb.dev/q/yarTtOPcwr
================================================================================
*/

// ✅ 自分の解答
import React, { useState } from 'react';

function ColorPicker() {
  //# 選択された色を管理するstateを用意しよう
  const [color, setColor] = useState('');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  }

  return (
    <div className="p-4">
      <select
        className="border rounded px-2 py-1"
        onChange={handleColorChange}
      >
        <option value="">カラーを選択してください</option>
        <option value="bg-red-500">赤色</option>
        <option value="bg-green-500">緑色</option>
        <option value="bg-blue-500">青色</option>
      </select>

      <div className={`mt-4 w-full h-24 ${color}`}></div>
    </div>
  );
}

export default ColorPicker;

// 📘 模範解答
// import React, { useState } from 'react';

// function ColorPicker() {
//   const [color, setColor] = useState('');

//   const handleColorChange = (event) => {
//     setColor(event.target.value);
//   };

//   return (
//     <div className="p-4">
//       <select
//         className="border rounded px-2 py-1"
//         onChange={handleColorChange}
//       >
//         <option value="">カラーを選択してください</option>
//         <option value="bg-red-500">赤色</option>
//         <option value="bg-green-500">緑色</option>
//         <option value="bg-blue-500">青色</option>
//       </select>

//       <div className={`mt-4 w-full h-24 ${color}`}></div>
//     </div>
//   );
// }

// export default ColorPicker;

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- selectタグはHTMLの一般的なタグ
- ユーザーがリストを選択したときにonChangeが呼ばれる
- eventプロパティからユーザーが選択した色を取り出せる
--------------------------------------------------------------------------------
*/
