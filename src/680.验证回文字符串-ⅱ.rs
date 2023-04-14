/*
 * @lc app=leetcode.cn id=680 lang=rust
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
impl Solution {
    pub fn valid_palindrome(s: String) -> bool {
        let mut c: Vec<char> = s.chars().collect();

        let mut len = c.len();

        for i in 0..len {
            if c[i] != c[len-1-i] {
                return Solution::is_palindrome(&s, i+1, len-1-i) || Solution::is_palindrome(&s, i, len-2-i)
            }
        }
        true
    }

    pub fn is_palindrome(s: &str, mut i: usize, mut j: usize) -> bool {
        let c: Vec<char> = s.chars().collect();
        while i<j {
            if c[i] != c[j] {
                return false;
            }
            j-=1;
            i+=1;
        }
        true
    }
}
// @lc code=end

