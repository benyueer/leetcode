/*
 * @lc app=leetcode.cn id=98 lang=rust
 *
 * [98] 验证二叉搜索树
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
    pub fn is_valid_bst(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        fn dfs(root: Option<Rc<RefCell<TreeNode>>>, l: i64, r: i64) -> bool {
            if let Some(root) = root {
                let val = root.borrow().val as i64;
                if val > l && val < r {
                    return dfs(root.borrow().left.clone(), l, val.min(r) )
                        && dfs(root.borrow().right.clone(), val.max(l), r);
                } else {
                    return false;
                }
            } else {
                return true;
            }
        }

        dfs(root, i64::MIN, i64::MAX)
    }
}
// @lc code=end

