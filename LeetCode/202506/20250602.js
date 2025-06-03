/*
================================================================================
問題: 169. Majority Element
出典: https://leetcode.com/problems/majority-element/description/
================================================================================
*/

// ✅ 自分の解答
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    let majorityNumValue = 0;
    let majorityNum = 0;

    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }

        if (map.get(num) > majorityNumValue) {
            majorityNum = num;
            majorityNumValue = map.get(num);
        }
    }

    return majorityNum;
};
