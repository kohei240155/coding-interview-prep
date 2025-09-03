/*
================================================================================
問題: Object.hasOwnで“自前のプロパティ”だけを判定する関数
出典: https://jsgym.shiftb.dev/q/RlmSQDCwgG
================================================================================
*/

// ✅ 自分の解答
// ① 確認用のオブジェクトを用意（プロトタイプに id、インスタンスに name）
const proto = { id: 123 };
const obj = Object.create(proto);
obj.name = 'Alice';

// ② お題の関数を定義
// 関数 hasOwn を定義し、Object.hasOwn を使って obj が key を“自前のプロパティ”として持つか真偽値で返してください。
// ここに関数定義のコードを書いてください。
const hasOwn = (obj, key) => Object.hasOwn(obj, key);

// ③ 関数を実行して結果を表示
// obj が 'id' を自前に持つか確認し、console.logで表示してください（期待値: false）。
// 必要であれば 'name' でも確認して挙動の違いを観察しましょう（任意）。
// ここに実行とconsole.logのコードを書いてください。
console.log(hasOwn(obj, 'id'));

// 📘 模範解答
// // ① デモ用オブジェクト
// const proto = { id: 123 };
// const obj = Object.create(proto);
// obj.name = 'Alice';

// // ② 関数定義
// const hasOwn = (o, key) => Object.hasOwn(o, key);

// // ③ 実行と出力
// console.log(hasOwn(obj, 'id'));   // false（idはプロトタイプ由来）
// console.log(hasOwn(obj, 'name')); // true（nameは自前のプロパティ）
