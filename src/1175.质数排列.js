/*
 * @lc app=leetcode.cn id=1175 lang=javascript
 *
 * [1175] 质数排列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
  let primeAns = 0
  const mod = 1000000007

  for (let i = 1; i<=n; i++) {
    if (isPrime(i)) {
      primeAns++
    }
  }

  let res = 1, noPrimeAns = n - primeAns

  while (primeAns) {
    res = res % mod
    res = res * primeAns
    primeAns--
  }

  while(noPrimeAns) {
    res = res % mod
    res = res * noPrimeAns
    noPrimeAns--
  }

  function isPrime(num) {
    if (num === 1) {
      return false
    }
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }

  return res
};
// @lc code=end

