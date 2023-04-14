/*
 * @lc app=leetcode.cn id=402 lang=rust
 *
 * [402] 移掉 K 位数字
 */

// @lc code=start
impl Solution {
    pub fn remove_kdigits(num: String, mut k: i32) -> String {
        let mut stack: Vec<usize> = vec![];
        let mut nums: Vec<u32> = num.chars().map(|c| c.to_digit(10).unwrap()).collect();

        for i in 0..nums.len() {
            while !stack.is_empty() && nums[i] < nums[stack.last().unwrap().to_owned()] && k > 0 {
                stack.pop();
                k -= 1;
            }
            stack.push(i);
        }

        while k > 0 {
            stack.pop();
            k -= 1;
        }

        let mut res = String::new();
        let mut flag = false;
        for i in 0..stack.len() {
            if nums[stack[i]] == 0 && !flag {
                continue;
            }
            flag = true;
            res.push_str(&nums[stack[i]].to_string());
        }
        if res == "" {
            res = "0".to_string();
        }
        res
    }
}
// @lc code=end
