/*
 * @lc app=leetcode.cn id=20 lang=rust
 *
 * [20] 有效的括号
 */

// @lc code=start
use std::collections::HashMap;
impl Solution {
    pub fn is_valid(s: String) -> bool {
        let mut s: Vec<char> = s.chars().collect();
        let mut stack: Vec<char> = vec![];
        let map = HashMap::from([
            ('(', ')'),
            ('[', ']'),
            ('{', '}'),
        ]);
        for i in s {
            if stack.len() > 0 && map.get(&stack.last().unwrap()) == Some(&i) {
                stack.pop();
            } else {
                stack.push(i);
            }
        }
        // println!("{:?}", stack);

        stack.len() == 0
    }
}
// @lc code=end

