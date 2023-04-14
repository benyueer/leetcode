/*
 * @lc app=leetcode.cn id=1694 lang=rust
 *
 * [1694] 重新格式化电话号码
 */

// @lc code=start
impl Solution {
    pub fn reformat_number(number: String) -> String {
        let mut res = String::from("");
        let mut num_str = number.replace("-", "").replace(" ", "");
        
        let len = num_str.len();

        let mut cur_idx = 0;

        while cur_idx + 4 < len {
            res.push_str(&num_str[cur_idx..cur_idx+3]);
            res.push('-');
            cur_idx += 3;
        }

        
        if len - cur_idx == 4{
            res.push_str(&num_str[cur_idx..cur_idx+2]);
            cur_idx += 2;
            res.push('-');
            res.push_str(&num_str[cur_idx..cur_idx+2]);
            
        } else {
            res.push_str(&num_str[cur_idx..])
        }
        
        println!("{res}");
        res
    }
}
// @lc code=end

