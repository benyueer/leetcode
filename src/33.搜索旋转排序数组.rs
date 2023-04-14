/*
 * @lc app=leetcode.cn id=33 lang=rust
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        let mut l = 0;
        let mut r = nums.len() - 1;

        while l <= r {
            let mid = l + (r - l)/2;
            if (mid > nums.len() - 1) {
                return -1;
            }
            if nums[mid] == target {
                return mid as i32;
            }
            if nums[l] <= nums[mid] {
                if target >= nums[l] && target < nums[mid] {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            } else {
                if target > nums[mid] && target <= nums[r] {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
        }
        -1
    }
}
// @lc code=end

