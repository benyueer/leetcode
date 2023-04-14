/*
 * @lc app=leetcode.cn id=21 lang=rust
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
//
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    pub fn merge_two_lists(
        list1: Option<Box<ListNode>>,
        list2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        let mut pre = ListNode::new(0);
        let mut h = &mut pre;
        let mut l1 = list1;
        let mut l2 = list2;
        while let (Some(mut n1), Some(mut n2)) = (l1.as_ref(), l2.as_ref()) {
            if n1.val < n2.val {
                h.next = l1;
                h = h.next.as_mut().unwrap();
                l1 = h.next.take();
            } else {
                h.next = l2;
                h = h.next.as_mut().unwrap();
                l2 = h.next.take();
            }
        }

        h.next = if l1.is_some() { l1 } else { l2 };

        pre.next
    }
}
// @lc code=end
