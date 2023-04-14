/*
 * @lc app=leetcode.cn id=455 lang=rust
 *
 * [455] 分发饼干
 */

// @lc code=start
impl Solution {
    pub fn find_content_children(g: Vec<i32>, s: Vec<i32>) -> i32 {
        let mut res: i32 = 0;
        let (mut g, mut s) = (g, s);
        g.sort();
        s.sort();
        let mut g = g.iter().rev();

        for s in s.iter().rev() {
            while let Some(g) = g.next() {
                if s >= g {
                    res = res + 1;
                    break;
                }
            }
        }

        res
    }
}
// @lc code=end

