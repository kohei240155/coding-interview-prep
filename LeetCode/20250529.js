/*
================================================================================
問題: 169. Majority Element
出典: https://leetcode.com/problems/majority-element/
結果: 正解
================================================================================
*/

// ✅ 自分の解答
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map();
    let maxCnt = 0;
    let majority = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], map.get(nums[i]) + 1);
        }

        if (maxCnt < map.get(nums[i])) {
            maxCnt = map.get(nums[i]);
            majority = nums[i];
        }
    }
    return majority;
};

// 📘 模範解答
var majorityElement = function(nums) {
    const map = new Map();
    let maxCnt = 0;
    let majority = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], map.get(nums[i]) + 1);
        }

        if (maxCnt < map.get(nums[i])) {
            maxCnt = map.get(nums[i]);
            majority = nums[i];
        }
    }
    return majority;
};


/*
--------------------------------------------------------------------------------
📝 学んだこと:
- Boyer-Moore Voting Algorithmという解法があるとのこと
--------------------------------------------------------------------------------
*/
