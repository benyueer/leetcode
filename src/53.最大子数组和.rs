/*
 * @lc app=leetcode.cn id=53 lang=rust
 *
 * [53] 最大子数组和
 */

// @lc code=start
impl Solution {
    pub fn max_sub_array(nums: Vec<i32>) -> i32 {
        let mut pre = nums[0];
        let mut ans = nums[0];
        for n in 1..nums.len() {
            pre = nums[n].max(nums[n] + pre);
            ans = pre.max(ans);
        }
        ans
    }
}
// @lc code=end

