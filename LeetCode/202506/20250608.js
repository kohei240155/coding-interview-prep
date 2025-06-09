/*
================================================================================
問題: 977. Squares of a Sorted Array
出典: https://leetcode.com/problems/squares-of-a-sorted-array/description/
================================================================================
*/

// ✅ 自分の解答
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {

    const squared = nums.map((item) => item ** 2);

    return squared.sort((a, b) => a - b);
};

// 📘 模範解答
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const result = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    let pos = nums.length - 1;

    while (left <= right) {
        const leftSq = nums[left] * nums[left];
        const rightSq = nums[right] * nums[right];

        if (leftSq > rightSq) {
            result[pos] = leftSq;
            left++;
        } else {
            result[pos] = rightSq;
            right--;
        }
        pos--;
    }

    return result;
};

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- squared.sort((a, b) => a - b)のように記述することで、昇順にソートできる
- **で階乗の計算をできる
- 模範解答のは難しいからできなくてもOK
--------------------------------------------------------------------------------
*/
