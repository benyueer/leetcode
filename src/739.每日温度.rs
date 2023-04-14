/*
 * @lc app=leetcode.cn id=739 lang=rust
 *
 * [739] 每日温度
 */

// @lc code=start
impl Solution {
    pub fn daily_temperatures(temperatures: Vec<i32>) -> Vec<i32> {
        let mut res = vec![0; temperatures.len()];
        let mut stack: Vec<usize> = vec![];

        for i in 0..temperatures.len() {
            while !stack.is_empty() && temperatures[stack.last().unwrap().to_owned()] < temperatures[i] {
                res[stack.last().unwrap().to_owned()] = (i - stack.last().unwrap().to_owned()) as i32;                
                stack.pop();
            }
            stack.push(i);
        }

        res
    }
}
// @lc code=end

