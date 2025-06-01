/*
================================================================================
問題: 1. Two Sum
出典: https://leetcode.com/problems/two-sum/description/
================================================================================
*/

// ✅ 自分の解答
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();

    for (let [idx, num] of nums.entries()) {
        let diff = target - nums[idx];

        if (map.has(diff)) {
            return [map.get(diff), idx];
        }

        map.set(nums[idx], idx);
    }
};

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- numsの繰り返しをするときに「let idx in nums」とすると、idxは文字列になってしまう
- for文の処理について、nums.entries()とすると配列のインデックスと値を取り出すことができる
--------------------------------------------------------------------------------
*/
