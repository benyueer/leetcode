/*
 * @lc app=leetcode.cn id=852 lang=rust
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
impl Solution {
    pub fn peak_index_in_mountain_array(arr: Vec<i32>) -> i32 {
        let mut l = 1;
        let mut r = arr.len() - 2;

        while l < r {
            let mid = l + (r - l) / 2;
            if arr[mid] > arr[mid-1] && arr[mid] < arr[mid + 1] {
                l = mid + 1;
            } else {
                r = mid;
            }
        }

        l as i32
    }
}
// @lc code=end

