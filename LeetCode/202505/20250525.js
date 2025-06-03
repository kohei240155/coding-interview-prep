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

    for (let i = 0; i < nums.length; i++) {
        let diffNum = target - nums[i];

        for (let j = 0; j < nums.length; j++) {
            if (i !== j && diffNum === nums[j]) {
                return [i, j];
            }
        }
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
- 自分の回答結果は2重ループになっているので、O(n²)となり処理効率が悪い
- 模範解答のようにMapを使用することでO(n)にすることができる
- Mapとはキー、バリュー形式でデータを保持することができる
- map.setで第一引数がnums[i]になるのは、nums[i]の値が後から探したい値だから
--------------------------------------------------------------------------------
*/
