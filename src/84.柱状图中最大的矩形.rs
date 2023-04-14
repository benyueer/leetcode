/*
 * @lc app=leetcode.cn id=84 lang=rust
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
impl Solution {
    pub fn largest_rectangle_area(heights: Vec<i32>) -> i32 {
        let mut res = 0;
        let mut stack: Vec<usize> = vec![];
        let mut heights = heights;
        heights.push(0);
        heights.insert(0, 0);

        for i in 0..heights.len() {
            while !stack.is_empty() && heights[stack.last().unwrap().to_owned()] > heights[i] {
                let cur = stack.pop().unwrap().to_owned();
                let left = stack.last().unwrap().to_owned() as i32;
                let right = i as i32;
                res = res.max((right - left - 1) * heights[cur]);
            }
            stack.push(i);
        }

        res
    }
}
// @lc code=end

