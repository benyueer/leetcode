/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let a = m-1, b = n-1
    while (b>=0 && a>=0) {
        if (nums1[a] >= nums2[b]) {
            nums1[a+b+1] = nums1[a]
            a--
        }
        else {
            nums1[a+b+1] = nums2[b]
            b--
        }
    }
    while (b>=0) {
        nums1[a+b+1] = nums2[b]
        b--
    }
};
// @lc code=end

