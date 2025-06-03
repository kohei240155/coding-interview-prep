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
    let map = new Map();

    for (let num of nums) {
        if (map.has(num)) {
            return true;
        }
        map.set(num, 1);
    }

    return false;
};

// 📘 模範解答
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
};


/*
--------------------------------------------------------------------------------
📝 学んだこと:
- 値の重複を排除する場合はSetを使用する
- 値の再代入を行わない限りは基本的にconstを使用する
- MapやSet、オブジェクト、配列はconstの使用が推奨されている
- 意図しない再代入を防ぐことが主な目的
--------------------------------------------------------------------------------
*/
