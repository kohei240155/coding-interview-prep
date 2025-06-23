/*
================================================================================
問題: 141. Linked List Cycle
出典: https://leetcode.com/problems/linked-list-cycle/description/
================================================================================
*/

// ✅ 自分の解答
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};

// 📘 模範解答
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;           // 1ステップ進む
        fast = fast.next.next;      // 2ステップ進む

        if (slow === fast) {
            return true; // サイクル発見
        }
    }

    return false; // nullに到達 → サイクルなし
};

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- この問題は巡回する可能性があるLinked Listに対して、巡回しているかどうかを確認する問題
- posはLinked Listの最終ノードがどの要素に繋がっているかを示す値
- Floyd’s algorithmを使って解く
- whileでslowではなくfastのnullチェックをしているかと言うと、
  fastの方が先にnullになる可能性があるから
--------------------------------------------------------------------------------
*/
