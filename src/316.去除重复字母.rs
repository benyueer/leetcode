/*
 * @lc app=leetcode.cn id=316 lang=rust
 *
 * [316] 去除重复字母
 */

// @lc code=start
impl Solution {
    pub fn remove_duplicate_letters(s: String) -> String {
        let mut vis = [false; 26];
        let mut stack: Vec<u8> = vec![];

        for (i, c) in s.bytes().enumerate() {
            if !vis[c as usize - 97] {
                let t = s[i..].as_bytes();
                while !stack.is_empty() && stack[stack.len() - 1] > c && t.contains(&stack[stack.len() - 1]) {
                    vis[stack.pop().unwrap() as usize - 97] = false;
                }
                stack.push(c);
                vis[c as usize - 97] = true;
            }
        }

        String::from_utf8(stack).unwrap()
    }
}
// @lc code=end

