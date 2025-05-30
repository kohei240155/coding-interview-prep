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
    let count = 0;
    let majorityNum = 0;
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], map.get(nums[i]) + 1);
        }

        if (count < map.get(nums[i])) {
            count = map.get(nums[i]);
            majorityNum = nums[i];
        }
    }

    return majorityNum;
};

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- ログを丁寧に出力しながら実装する方が考えながらやっているようにみえていいかも
--------------------------------------------------------------------------------
*/
