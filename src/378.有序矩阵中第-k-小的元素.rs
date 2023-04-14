/*
 * @lc app=leetcode.cn id=378 lang=rust
 *
 * [378] 有序矩阵中第 K 小的元素
 */

// @lc code=start
impl Solution {
    pub fn kth_smallest(matrix: Vec<Vec<i32>>, k: i32) -> i32 {
        use std::cmp::Reverse;
        use std::collections::BinaryHeap;
        let mut heap = BinaryHeap::new();
        let cols = matrix.len();

        matrix[0].iter().enumerate().for_each(|(i, v)| {
            heap.push(Reverse((matrix[0][i], 0, i)));
        });


        for i in 1..k {
            if let Some(Reverse((v, j, i))) = heap.pop() {
                if j + 1 < cols {
                    heap.push(Reverse((matrix[j+1][i], j+1, i)));
                } 
            }
        }

        heap.pop().unwrap().0.0
    }
}
// @lc code=end
