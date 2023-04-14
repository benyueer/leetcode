/*
 * @lc app=leetcode.cn id=1221 lang=rust
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
impl Solution {
    pub fn balanced_string_split(s: String) -> i32 {
        let (mut l_count, mut r_count, mut res) = (0, 0, 0);
        let v: Vec<char> = s.chars().collect();
        for i in v {
            if i == 'L' {
                l_count += 1;
            }
            if i == 'R' {
                r_count += 1;
            }

            if (l_count == r_count) {
                res += 1;
                l_count = 0;
                r_count = 0;
            }
        }
        res
    }
}
// @lc code=end

