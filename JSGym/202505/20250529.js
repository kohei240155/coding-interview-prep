/*
================================================================================
問題: リアルタイムで残文字数の表示を作ろう🌟
出典: https://jsgym.shiftb.dev/q/pwJ0RqI-JA
================================================================================
*/

// ✅ 自分の解答
import React, { useState } from 'react';

function TextCounter() {
  // ここで入力テキストを管理しよう
  const MAX_CHARS = 50;
  const [text, setText] = useState("");

  const handleInput = (e) => {
    if (e.target.value.length <= MAX_CHARS) {
      setText(e.target.value);
    }
  }

  return (
    <div className="max-w-md mx-auto">
      {/* textareaを用意しよう */}
      <textarea
        className="border border-gray-300 rounded p-2 w-full"
        onChange={handleInput}
        value={text}
        placeholder="ここに入力してね✨">
      </ textarea>
      {/* 残り文字数を表示しよう */}
      <p className="text-right text-gray-500">残り文字数：{MAX_CHARS - text.length}</p>
    </div>
  );
}

export default TextCounter;

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- handleInputの引数にeventを渡していないが、イベントを使用できるのはReactが
  自動で渡してくれているから
--------------------------------------------------------------------------------
*/
