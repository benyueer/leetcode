/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target <= nums[0]) return 0
    let i = 1
    for (; i < nums.length; i++) {
        if (nums[i] === target) return i
        if (nums[i] > target) return i
    }
    return i
};
// @lc code=end

