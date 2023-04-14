/*
 * @lc app=leetcode.cn id=3 lang=rust
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        let (mut start, mut end, mut res) = (0, 0, 0);
        let mut hashmap = std::collections::HashMap::new();

        for (ind, v) in s.char_indices() {
            end = ind;
            if let Some(c) = hashmap.get_mut(&v) {
                start = start.max(*c + 1);
                *c = ind;
            } else {
                hashmap.insert(v, ind);
            }
            println!("{} {}", start, end);
            res = res.max((end - start + 1) as i32);
        }
        res
    }
}
// @lc code=end

