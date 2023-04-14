/*
 * @lc app=leetcode.cn id=88 lang=rust
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
impl Solution {
    pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
        let mut a = m as usize;
        let mut b = n as usize;

        while a>0 && b >0 {
            if nums1[a-1] > nums2[b-1] {
                nums1[a+b-1] = nums1[a-1];
                a-=1;
            } else {
                // println!("{}", b);
                nums1[a+b-1] = nums2[b-1];
                b-=1;
            }
        }

        while b>0 {
            nums1[b-1] = nums2[b-1];
            b-=1;
        }
    }
}
// @lc code=end

