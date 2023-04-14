/*
 * @lc app=leetcode.cn id=102 lang=rust
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
//
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;
use std::collections::VecDeque;              
impl Solution {
    pub fn level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
        let mut res: Vec<Vec<i32>> = vec![];
        let mut queue = VecDeque::new();
        if let Some(node) = root {
            queue.push_back(node)
        }
        while !queue.is_empty() {
            let mut len = queue.len();
            let mut h = vec![];
            while len > 0 {
                let c = queue.pop_front().unwrap();
                if let Some(left) = &c.borrow_mut().left {
                    queue.push_back(left.clone());
                }
                if let Some(right) = c.borrow_mut().right.take() {
                    queue.push_back(right);
                }
                len -= 1;
                h.push(c.borrow().val);
            }
            res.push(h);
        }
        res
    }
}
// @lc code=end

