/*
================================================================================
問題: 文字列の最初の文字を取得する関数を作ろう
出典: https://jsgym.shiftb.dev/q/97i9qnfXkN
================================================================================
*/

// ✅ 自分の解答
// ① 引数として渡す文字列の定数定義
const str = "JavaScript";

// ② 関数の定義
// ここに最初の文字を取得する関数を書いてください。
const getStartChar = (str) => str[0];

// ③ 関数の実行とconsole.logでの表示
// ここで関数を実行し、結果をconsole.logで表示してください。
console.log(getStartChar(str));

// 📘 模範解答
// const getFirstCharacter = str => str.charAt(0);
// const str = "JavaScript";
// console.log(getFirstCharacter(str)); // "J"

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- charAt()でも文字を取得することができる
--------------------------------------------------------------------------------
*/

/*
================================================================================
問題: 偶数のみを合計する関数
出典: https://jsgym.shiftb.dev/q/Pez4zP8D5E
================================================================================
*/

// ✅ 自分の解答
// ① 引数となる定数の定義
const numbers = [1, 2, 3, 4, 5, 6];

// ② 偶数だけを合計して返す関数の定義
// ここに関数定義のコードを書いてください。
const sumOnlyOdd = (numbers) => {
  return numbers.reduce((acc, num) => num % 2 === 0 ? num + acc : acc, 0);
}

// ③ 関数の実行
// ここに関数実行のコードを書いてください。
console.log(sumOnlyOdd(numbers));

// 📘 模範解答
// const sumEvenNumbers = arr => arr.filter(n => n % 2 === 0).reduce((acc, num) => acc + num, 0);
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(sumEvenNumbers(numbers)); // 12

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- filter関数を使って偶数にフィルターしてからreduceを使用する方法もあった
--------------------------------------------------------------------------------
*/

/*
================================================================================
問題: フォーム入力のオン/オフを切り替えるトグルを作成しよう⚙️
出典: https://jsgym.shiftb.dev/q/gHdJmuV1pz
================================================================================
*/

// ✅ 自分の解答
import React, { useState } from 'react';

function InputToggle() {
  //# useStateを使用して入力の有効/無効を管理する状態を作成してください。
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleInput = () => {
    setIsDisabled(previousState => !previousState);
  }

  return (
    <div>
      <div>
        <button
          onClick={toggleInput}
          className="px-4 py-2 bg-blue-400 text-white rounded"
        >
          {isDisabled ? "フォームを有効にする" : "フォームを無効にする"}
        </button>
        <input
          type="text"
          disabled={isDisabled}
          placeholder="入力してみましょう"
          className="border border-gray-300 rounded px-4 py-2"
         />
      </div>
    </div>
  );
}

export default InputToggle;

// 📘 模範解答
// import React, { useState } from 'react';

// function InputToggle() {
//   const [isDisabled, setIsDisabled] = useState(false);

//   const toggleInput = () => {
//     setIsDisabled(previousState => !previousState);
//   };

//   return (
//     <div className="space-y-4">
//       <button
//         onClick={toggleInput}
//         className="px-4 py-2 bg-blue-400 text-white rounded"
//       >
//         {isDisabled ? 'フォームを有効にする' : 'フォームを無効にする'}
//       </button>
//       <input
//         type="text"
//         disabled={isDisabled}
//         placeholder="入力してみましょう"
//         className="border border-gray-300 rounded px-4 py-2"
//       />
//     </div>
//   );
// }

// export default InputToggle;