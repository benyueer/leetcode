/*
 * @lc app=leetcode.cn id=745 lang=javascript
 *
 * [745] 前缀和后缀搜索
 */

// @lc code=start
/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
  this.map = new Map()
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    for (let pre = 1; pre <= word.length; pre++){
      for (let suf = word.length - 1; suf >= 0; suf--) {
        this.map.set(`${word.slice(0, pre)}#${word.slice(suf, word.length)}`, i)
      }
    }
  }
};

/** 
 * @param {string} pref 
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function(pref, suff) {
  return this.map.get(`${pref}#${suff}`) ?? -1
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
// @lc code=end

