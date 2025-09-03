/*
================================================================================
問題:
出典:
================================================================================
*/

// ✅ 自分の解答
import React, { useState } from 'react';

function ClipboardCopyInput() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState(null); // 'ok' | 'error' | null

  const copy = async () => {
    const value = text.trim();
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      setStatus('ok');
    } catch (e) {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus(null), 1500);
    }
  };

  const isDisabled = text.trim() === '';

  return (
    <div className="p-4 max-w-md mx-auto space-y-3">
      <label htmlFor="copytext" className="block text-sm text-gray-700">
        コピーしたいテキスト
      </label>
      <div className="flex items-center gap-2">
        <input
          id="copytext"
          type="text"
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="テキストを入力"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={copy}
          disabled={isDisabled}
          className={`px-4 py-2 rounded text-white ${
            isDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          コピーする
        </button>
      </div>
      {status === 'ok' && (
        <p className="text-green-600 text-sm">クリップボードにコピーしました ✅</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm">コピーに失敗しました ❌</p>
      )}
    </div>
  );
}

export default ClipboardCopyInput;

// 📘 模範解答
// import React, { useState } from 'react';

// function ClipboardCopyInput() {
//   const [text, setText] = useState('');
//   const [status, setStatus] = useState(null); // 'ok' | 'error' | null

//   const copy = async () => {
//     const value = text.trim();
//     if (!value) return;
//     try {
//       await navigator.clipboard.writeText(value);
//       setStatus('ok');
//     } catch (e) {
//       setStatus('error');
//     } finally {
//       setTimeout(() => setStatus(null), 1500);
//     }
//   };

//   const isDisabled = text.trim() === '';

//   return (
//     <div className="p-4 max-w-md mx-auto space-y-3">
//       <label htmlFor="copytext" className="block text-sm text-gray-700">
//         コピーしたいテキスト
//       </label>
//       <div className="flex items-center gap-2">
//         <input
//           id="copytext"
//           type="text"
//           className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           placeholder="テキストを入力"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <button
//           onClick={copy}
//           disabled={isDisabled}
//           className={`px-4 py-2 rounded text-white ${
//             isDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
//           }`}
//         >
//           コピーする
//         </button>
//       </div>
//       {status === 'ok' && (
//         <p className="text-green-600 text-sm">クリップボードにコピーしました ✅</p>
//       )}
//       {status === 'error' && (
//         <p className="text-red-600 text-sm">コピーに失敗しました ❌</p>
//       )}
//     </div>
//   );
// }

// export default ClipboardCopyInput;