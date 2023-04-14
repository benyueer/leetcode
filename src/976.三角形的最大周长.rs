/*
 * @lc app=leetcode.cn id=976 lang=rust
 *
 * [976] 三角形的最大周长
 */

// @lc code=start
impl Solution {
    pub fn largest_perimeter(nums: Vec<i32>) -> i32 {
        let mut nums = nums;
        nums.sort();
        let len = nums.len();

        let mut i = len - 1;
        while i >= 2 {
            if nums[i-1] + nums[i-2] > nums[i] {
                return nums[i-1] + nums[i-2] + nums[i];
            }
            i-=1;
        }
        0
    }
}
// @lc code=end

