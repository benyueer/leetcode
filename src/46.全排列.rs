/*
 * @lc app=leetcode.cn id=46 lang=rust
 *
 * [46] 全排列
 */

// @lc code=start
impl Solution {
    pub fn permute(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut res = vec![];
        let mut nums = nums;


        fn dfs(res: &mut Vec<Vec<i32>>, nums: &mut Vec<i32>, len: usize) {
            if len == nums.len() {
                res.push(nums.to_vec());
                return ;
            }

            for i in len..nums.len() {
                nums.swap(i, len);
                dfs(res, nums, len + 1);
                nums.swap(i, len);
            }
        }
        dfs(&mut res, &mut nums, 0);
        res
    }
}
// @lc code=end

