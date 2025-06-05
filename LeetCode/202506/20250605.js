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
    let insertPos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }

    while (insertPos < nums.length) {
        nums[insertPos] = 0;
        insertPos++;
    }

    console.log(nums);
};

// 📘 模範解答
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lastNonZeroIndex = 0;

    // 1. 非ゼロ要素を前方に詰める
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroIndex] = nums[i];
            lastNonZeroIndex++;
        }
    }

    // 2. 残りをゼロで埋める
    for (let i = lastNonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- 問題文をよく読むこと
- 0以外の要素を配列の前方へ先に詰めてしまう
- 詰め切ったら0以外の数値の数だけ0埋めを行う
--------------------------------------------------------------------------------
*/
