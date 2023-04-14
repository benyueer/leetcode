/*
 * @lc app=leetcode.cn id=42 lang=rust
 *
 * [42] 接雨水
 */

// @lc code=start
impl Solution {
    pub fn trap(height: Vec<i32>) -> i32 {
        let mut res = 0;
        let mut stack: Vec<usize> = vec![];

        for i in 0..height.len() {
            while !stack.is_empty() && height[i] > height[stack.last().unwrap().to_owned()] {
                let cur = stack.pop().unwrap().to_owned();
                if stack.is_empty() {
                    break;
                }
                let dis = i - stack.last().unwrap().to_owned() - 1;
                let h = height[i].min(height[stack.last().unwrap().to_owned()]) - height[cur];
                res += h * dis as i32;
            }
            stack.push(i);
        }

        res
    }
}
// @lc code=end

