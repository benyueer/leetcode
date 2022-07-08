/*
 * @lc app=leetcode.cn id=1669 lang=javascript
 *
 * [1669] 合并两个链表
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
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
  let aNode, bNode
  let h1 = list1, index = 0
  while(h1) {
    if (a - 1 === index) {
      aNode = h1
    }
    if (b === index) {
      bNode = h1.next
      break
    }
    index++
    h1 = h1.next
  }

  aNode.next = list2
  while(list2.next) {
    list2 = list2.next
  }
  list2.next = bNode

  return list1
};
// @lc code=end

