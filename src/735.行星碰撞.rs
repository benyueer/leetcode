/*
 * @lc app=leetcode.cn id=735 lang=rust
 *
 * [735] 行星碰撞
 */

// @lc code=start
impl Solution {
    pub fn asteroid_collision(asteroids: Vec<i32>) -> Vec<i32> {
        let mut res = vec![];
        for i in 0..asteroids.len() {
            let mut is_use = true;
            while !res.is_empty() && res.last().unwrap() > &0 && asteroids[i] < 0 {
                if *res.last().unwrap() < -asteroids[i] {
                    res.pop();
                } else if *res.last().unwrap() == -asteroids[i] {
                    res.pop();
                    is_use = false;
                    break;
                } else {
                    is_use = false;
                    break;
                }
            }
            if is_use {
                res.push(asteroids[i]);
            }
        }

        res
    }
}
// @lc code=end

