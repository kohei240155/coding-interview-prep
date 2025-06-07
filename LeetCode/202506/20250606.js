/*
================================================================================
問題: 283. Move Zeroes
出典: https://leetcode.com/problems/move-zeroes/description/
================================================================================
*/

// ✅ 自分の解答
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let insertIdx = 0;

    for (let idx in nums) {

        if (nums[idx] !== 0) {
            nums[insertIdx] = nums[idx];
            insertIdx++;
        }
    }

    for (let i = insertIdx; i < nums.length; i++) {
        nums[i] = 0;
    }
};

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- この解法はポインタを2つ使っているので2ポインタ法と呼ばれている
- 変数はinsertIdxとかにするといいかも
--------------------------------------------------------------------------------
*/
