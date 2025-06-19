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

    const build = (str) => {
        const stack = [];

        const strArray = Array.from(str);
        for (let char of strArray) {
            if (char !== '#') {
                stack.push(char);
            } else {
                stack.pop();
            }
        }
        return stack.join();
    }

    return build(s) === build(t);
};
