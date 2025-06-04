/*
================================================================================
問題: 217. Contains Duplicate
出典: https://leetcode.com/problems/contains-duplicate/description/
================================================================================
*/

// ✅ 自分の解答
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            return true;
        } else {
            set.add(num);
        }
    }
    return false;
};