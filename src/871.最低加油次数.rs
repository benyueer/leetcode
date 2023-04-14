/*
 * @lc app=leetcode.cn id=871 lang=rust
 *
 * [871] 最低加油次数
 */

// @lc code=start
impl Solution {
    pub fn min_refuel_stops(target: i32, start_fuel: i32, stations: Vec<Vec<i32>>) -> i32 {
        use std::collections::BinaryHeap;
        let mut res = 0;
        let mut heap = BinaryHeap::new();
        let mut cur_fuel = start_fuel;
        let mut cur_pos = 0;
        let mut ind = 0;

        while cur_pos < target {
            if cur_fuel == 0 {
                if !heap.is_empty() {
                    cur_fuel += heap.pop().unwrap();
                    res += 1;
                } else {
                    return -1;
                }
            }
            cur_pos += cur_fuel;
            cur_fuel = 0;

            while ind < stations.len() && stations[ind][0] <= cur_pos {
                heap.push(stations[ind][1]);
                ind += 1;
            }
        }

        res
    }
}
// @lc code=end

