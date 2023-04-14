/*
 * @lc app=leetcode.cn id=34 lang=rust
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
impl Solution {
    pub fn search_range(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut res = vec![-1, -1];
        if nums.len() == 0 {
            return res;
        }

        fn binary_search(arr: &Vec<i32>, target: i32, lower: bool) -> i32 {
            let mut l = 0;
            let mut r = arr.len() - 1;
            let mut ans = match lower {
                true => 0,
                false => arr.len() - 1,
            };

            while l <= r {
                let mid = l + (r- l) / 2;
                if arr[mid] > target || (lower && arr[mid] >= target) {
                    if mid == 0 {
                        match lower {
                            true => ans = mid,
                            false => (),
                        }
                        break;
                    }
                    r = mid - 1;
                    ans = match lower {
                        true => mid,
                        false => mid - 1,
                    }
                } else {
                    l = mid + 1;
                }
            }

            ans as i32
        }

        let start = binary_search(&nums, target, true);
        let end = binary_search(&nums, target, false);

        // println!("{start} {end}");

        if start <= end && end < nums.len() as i32 && nums[start as usize] == target && nums[end as usize] == target {
            res = vec![start, end];
        }
        res
    }
}
// @lc code=end

