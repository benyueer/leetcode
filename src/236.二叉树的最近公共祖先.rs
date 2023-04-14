/*
 * @lc app=leetcode.cn id=236 lang=rust
 *
 * [236] 二叉树的最近公共祖先
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
    pub fn lowest_common_ancestor(root: Option<Rc<RefCell<TreeNode>>>, p: Option<Rc<RefCell<TreeNode>>>, q: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        let mut ans: Option<Rc<RefCell<TreeNode>>> = None;
        fn dfs(
            ans: &mut Option<Rc<RefCell<TreeNode>>>,
            h: &Option<Rc<RefCell<TreeNode>>>,
            p: i32,
            q: i32
        ) -> bool {
            if let Some(hd) = h {
                let hasl = dfs(ans, &hd.borrow().left, p, q); 
                let hasr = dfs(ans, &hd.borrow().right, p, q); 

                if (hasl && hasr) || ((hd.borrow().val == p || hd.borrow().val == q) && (hasl || hasr)) {
                    *ans = Some(Rc::clone(hd));
                    println!("{:?}", ans);
                }

                return hasl || hasr || (hd.borrow().val == p || hd.borrow().val == q);
            } else {
                return false;
            }
        }
        dfs(&mut ans, &root, p.unwrap().borrow().val, q.unwrap().borrow().val);
        return ans;
    }
}
// @lc code=end

