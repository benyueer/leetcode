/*
 * @lc app=leetcode.cn id=605 lang=rust
 *
 * [605] 种花问题
 */

// @lc code=start
impl Solution {
    pub fn can_place_flowers(flowerbed: Vec<i32>, n: i32) -> bool {
        let (mut n, mut flowerbed) = (n, flowerbed);

        let len = flowerbed.len();

        let mut i = 0;

        while i < len {
            if flowerbed[i] == 1 {
                i = i+2;
            } else if (i+1 < len && flowerbed[i+1] == 0) || i == len - 1 {
                n-=1;
                i = i+2;
            } else {
                i = i+3;
            }
        }

        n<=0
    }
}
// @lc code=end

