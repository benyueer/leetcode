/*
 * @lc app=leetcode.cn id=56 lang=rust
 *
 * [56] 合并区间
 */

// @lc code=start
impl Solution {
    pub fn merge(intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut res = vec![];
        let mut intervals = intervals;
        intervals.sort_by(|a, b| a[0].cmp(&b[0]));
        
        for i in 1..intervals.len() {
            if intervals[i-1][1] >= intervals[i][0] {
                if intervals[i-1][1] >= intervals[i][1] {
                    intervals[i][0] = intervals[i-1][0];
                    intervals[i][1] = intervals[i-1][1];
                } else {
                    intervals[i][0] = intervals[i-1][0];
                }
            } else {
                res.push(intervals[i-1].clone());
            }
        }
        res.push(intervals[intervals.len() - 1].clone());

        res
    }
}
// @lc code=end

