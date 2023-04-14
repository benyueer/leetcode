/*
 * @lc app=leetcode.cn id=19 lang=rust
 *
 * [19] 删除链表的倒数第 N 个结点
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
    pub fn remove_nth_from_end(head: Option<Box<ListNode>>, n: i32) -> Option<Box<ListNode>> {
        let mut pre = Box::new(ListNode{val: 0, next: head});
        let mut n = n;
        let mut s = pre.as_mut();
        let mut f = &s.clone();
        


        while n > 0 {
            f = f.next.as_ref().unwrap();
            n-=1;
        }
        
        while f.next.is_some() {
            f = f.next.as_ref().unwrap();
            s = s.next.as_mut().unwrap();
        }
        s.next = s.next.as_ref().unwrap().next.to_owned();
        
        pre.next
    }
}
// @lc code=end

