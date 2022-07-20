/*
 * @lc app=leetcode.cn id=676 lang=javascript
 *
 * [676] 实现一个魔法字典
 */

// @lc code=start

var MagicDictionary = function() {

};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
  this.words = dictionary
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
  for (let word of this.words) {
    if (word.length !== searchWord.length) continue

    let diff = 0

    for (let i = 0; i < searchWord.length; i++) {
      if (searchWord[i] !== word[i]) {
        if (diff>1) break
        diff++
      }
    }
    if (diff == 1) {
      return true
    }
  }

  return false
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
// @lc code=end

