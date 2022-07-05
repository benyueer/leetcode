/*
 * @lc app=leetcode.cn id=729 lang=javascript
 *
 * [729] 我的日程安排表 I
 */

// @lc code=start

var MyCalendar = function() {
  this.arrs = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  for (let i = 0; i< this.arrs.length; i++) {
    let [s, e] = [this.arrs[i][0], this.arrs[i][1]]
    if (start < e && s < end) return false
  }
  this.arrs.push([start, end])
  return true
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

