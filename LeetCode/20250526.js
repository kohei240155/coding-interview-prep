/*
================================================================================
問題: 1. Two Sum
出典: https://leetcode.com/problems/two-sum/description/
結果: 正解
================================================================================
*/

// ✅ 自分の解答
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {

        const diff = target - nums[i];
        if (map.has(diff)) {
            return [i, map.get(diff)];
        }

        map.set(nums[i], i);

    }
};

// 📘 模範解答
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if (map.has(diff)) {
            return [map.get(diff), i];
        }

        map.set(nums[i], i);
    }
};

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- newキーワードは新しいオブジェクトを生成する場合などで使用される
- newの先頭は小文字
- Mapオブジェクト内に指定したキーが存在するかを調べたい場合はmap.has()のように使う
- Mapオブジェクト内で指定したキーの値を取得したい場合はmap.get()のように使う
- Mapオブジェクトに新しい値を追加したい場合はmap.set()のように使う
--------------------------------------------------------------------------------
*/
