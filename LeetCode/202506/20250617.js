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

    const typingChar = (str) => {

        const listedStr = Array.from(str);
        let stack = [];

        for (let char of str) {
            if (char !== "#") {
                stack.push(char);
            } else {
                stack.pop();
            }
        }

        return stack.join();
  }

    return typingChar(s) === typingChar(t);
};