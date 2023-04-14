/*
 * @lc app=leetcode.cn id=64 lang=rust
 *
 * [64] 最小路径和
 */

// @lc code=start
impl Solution {
    pub fn min_path_sum(grid: Vec<Vec<i32>>) -> i32 {
        let mut dp = vec![];
        for i in 0..grid.len() {
            dp.push(vec![]);

            for j in 0..grid[i].len() {
                if i == 0 && j == 0 {
                    dp[i][j] = grid[0][0] as usize;
                } else if i == 0 {
                    dp[i][j] = dp[i][j-1] + (grid[i][j] as usize);
                } else if j == 0 {
                    dp[i][j] = dp[i-1][j] + (grid[i][j] as usize);
                } else {
                    dp[i][j] = std::cmp::min(dp[i-1][j], dp[i][j-1]) + (grid[i][j] as usize);
                }
            }
        }

        dp[dp.len() - 1][dp[0].len() - 1] as i32
    }
}
// @lc code=end

