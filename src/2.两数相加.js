/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let result = new ListNode()
  let cur = result
  let curry = 0
  while (l1 || l2 || curry) {
    cur.next = new ListNode()
    cur = cur.next
    let count = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + curry
    cur.val = count % 10
    curry = Math.floor(count / 10)

    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }
  return result.next
};
// @lc code=end

