/*
 * @lc app=leetcode.cn id=1013 lang=rust
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
impl Solution {
    pub fn can_three_parts_equal_sum(mut arr: Vec<i32>) -> bool {
        let mut count = 0;
        for i in &arr {
            count += i;
        }

        if count % 3 != 0 {
            return false;
        }
        
        let avg = count / 3;

        let (mut t_count, mut sum) = (0, 0);

        for i in arr {
            sum += i;
            if sum == avg {
                t_count += 1;
                sum = 0;
            }
        }

        return t_count >= 3;
    }
}
// @lc code=end

