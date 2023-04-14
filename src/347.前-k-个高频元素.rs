/*
 * @lc app=leetcode.cn id=347 lang=rust
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
impl Solution {
    pub fn top_k_frequent(nums: Vec<i32>, t: i32) -> Vec<i32> {
        use std::cmp::Reverse;
        use std::collections::HashMap;
        use std::collections::BinaryHeap;
        let mut map = HashMap::new();
        let mut heap = BinaryHeap::new();
        nums.into_iter()
            .for_each(|i| *map.entry(i).or_insert(0) += 1);

        for (k, v) in map.iter() {
            if heap.len() == t as usize {
                if *heap.peek().unwrap() > Reverse((v, k)) {
                    heap.pop();
                } else {
                    continue;
                }
            }
            heap.push(Reverse((v, k)));
        }

        heap.into_vec().iter().map(|&n| *n.0 .1).collect()
    }
}
// @lc code=end
