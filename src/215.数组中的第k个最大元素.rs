/*
 * @lc app=leetcode.cn id=215 lang=rust
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
impl Solution {
    pub fn find_kth_largest(nums: Vec<i32>, k: i32) -> i32 {
        use std::collections::BinaryHeap;
        let mut heap = BinaryHeap::new();
        for i in nums {
            heap.push(i);
        }
        
        for i in 0..k-1 {
            heap.pop();
        }

        heap.pop().unwrap()
    }
}
// @lc code=end

