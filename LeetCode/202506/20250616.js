/*
================================================================================
問題: 844. Backspace String Compare
出典: https://leetcode.com/problems/backspace-string-compare/description/
================================================================================
*/

// ✅ 自分の解答
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const stackS = [];
    const stackT = [];

    for (let char of s.split('')) {
        if (char !== '#') {
            stackS.push(char);
        } else {
            stackS.pop();
        }
    }

    for (let char of t.split('')) {
        if (char !== '#') {
            stackT.push(char);
        } else {
            stackT.pop();
        }
    }

    return stackS.join() === stackT.join();
};

// 📘 模範解答
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const build = (str) => {
        const stack = [];
        for (let char of str) {
            if (char === '#') {
                stack.pop();
            } else {
                stack.push(char);
            }
        }
        return stack.join('');
    };

    return build(s) === build(t);
};

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- splitを使うことで文字列を配列に変換することができる
- Array.from()や[...str]のようにスプリット構文を使用した方がよかった
- 模範解答のように関数内に関数を定義するアプローチも存在する
--------------------------------------------------------------------------------
*/
