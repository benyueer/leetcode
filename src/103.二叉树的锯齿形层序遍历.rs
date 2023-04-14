/*
 * @lc app=leetcode.cn id=103 lang=rust
 *
 * [103] 二叉树的锯齿形层序遍历
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
    pub fn zigzag_level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
        let mut res = vec![];
        let mut queue = vec![];

        if let Some(node) = root {
            queue.push(node);
        }
        let mut dir = true;

        while !queue.is_empty() {
            // println!("{:?}", queue);
            let mut a= vec![];

            for i in 0..queue.len() {
                let mut t = queue.remove(0);
                a.push(t.borrow().val);
                if let Some(l) = t.clone().borrow().left.as_ref() {
                    queue.push(l.clone());
                }
                if let Some(r) = t.clone().borrow().right.as_ref() {
                    queue.push(r.clone());
                }
            }
            if !dir {
                a.reverse();
            }
            res.push(a);
            dir = !dir;
        }

        res
    }
}
// @lc code=end

