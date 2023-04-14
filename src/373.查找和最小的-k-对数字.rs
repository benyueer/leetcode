/*
 * @lc app=leetcode.cn id=373 lang=rust
 *
 * [373] 查找和最小的 K 对数字
 */

// @lc code=start
impl Solution {
    pub fn k_smallest_pairs(nums1: Vec<i32>, nums2: Vec<i32>, k: i32) -> Vec<Vec<i32>> {
        use std::cmp::Reverse;

        use std::collections::BinaryHeap;
        let mut res = vec![];
        let mut heap: BinaryHeap<Reverse<(i32, usize, usize)>> = nums1
            .iter()
            .enumerate()
            .map(|(n, v)| Reverse((nums1[n] + nums2[0], n, 0)))
            .collect();

        for i in 0..k as usize {
            if let Some(Reverse((i, j, k))) = heap.pop() {
                if k + 1 < nums2.len() {
                    heap.push(Reverse((nums1[j] + nums2[k + 1], j, k + 1)));
                }
                res.push(vec![nums1[j], nums2[k]]);
            } else {
                continue;
            }
        }

        res
    }
}
// @lc code=end
