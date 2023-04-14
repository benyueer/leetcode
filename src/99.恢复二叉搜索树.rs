/*
 * @lc app=leetcode.cn id=99 lang=rust
 *
 * [99] 恢复二叉搜索树
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
impl Solution {
    pub fn recover_tree(root: &mut Option<Rc<RefCell<TreeNode>>>) {
        let mut stack = vec![];
        let mut cur = root.clone();
        let mut x: Option<Rc<RefCell<TreeNode>>> = None;
        let mut y: Option<Rc<RefCell<TreeNode>>> = None;
        let mut pre: Option<Rc<RefCell<TreeNode>>> = None;
        // println!("{:?}", cur);
        while cur.is_some() || !stack.is_empty() {
            while cur.is_some() {
                stack.push(cur.clone());
                cur = cur.unwrap().borrow().left.clone();
            }
            cur = stack.pop().unwrap();

            if pre.is_some() && cur.as_ref().unwrap().borrow().val  < pre.as_ref().unwrap().borrow().val {
                y = cur.clone();
                if x.is_none() {
                    x = pre;
                } else {
                    break;
                }
            }

            pre = cur.clone();
            cur = cur.unwrap().borrow().right.clone();

        }
        let temp = x.as_ref().unwrap().borrow().val.to_owned();
        x.unwrap().borrow_mut().val = y.as_ref().unwrap().borrow().val.to_owned();
        y.unwrap().borrow_mut().val = temp;
    }
}
// @lc code=end

