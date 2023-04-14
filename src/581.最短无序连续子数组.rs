/*
 * @lc app=leetcode.cn id=581 lang=rust
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
impl Solution {
    pub fn find_unsorted_subarray(nums: Vec<i32>) -> i32 {
        let mut min = i32::MAX;
        let mut max = i32::MIN;
        let mut l = 0;
        let mut r: i32 = -1;

        // [2,6,4,8,10,9,15]

        for i in 0..nums.len() {
            if nums[i] < max {
                r = i as i32;
            } else {
                max = nums[i];
            }

            if nums[nums.len() - 1 - i] > min {
                l = (nums.len() - 1 - i) as i32;
            } else {
                min = nums[nums.len() - 1 - i];
            }
        }

        r - l + 1
    }
}
// @lc code=end

