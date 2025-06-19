/*
================================================================================
問題: 21. Merge Two Sorted Lists
出典: https://leetcode.com/problems/merge-two-sorted-lists/description/
================================================================================
*/

// ✅ 自分の解答
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 !== null ? list1 : list2;

    return dummy.next;
};

// 📘 模範解答
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 !== null ? list1 : list2;

    return dummy.next;
};

/*
--------------------------------------------------------------------------------
📝 学んだこと:
- Linked Listとは配列とは異なる形でデータを管理するデータ構造のこと
- ListNodeにはval(値)とnext(次のノードへの参照)を設定することができる
- currentは一時作業用のノードとして使用している
- dummyは先頭のノードで、returnするときにはdummy.nextが先頭のノードになる
--------------------------------------------------------------------------------
*/
