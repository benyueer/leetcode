/**
 * 11. 盛最多水的容器
 */
function maxArea(height) {
  let res = 0
  let l = 0, r = height.length - 1

  while (l < r) {
    let hl = height[l]
    let hr = height[r]

    res = Math.max(res, ((r - l) * Math.min(hl, hr)))

    if (hl < hr) {
      l++
    } else {
      r--
    }
  }
  return res
}
// console.log(maxArea([1,8,6,2,5,4,8,3,7]))

/**
 * 不重叠区间
 */
function noOverLap(arr) {
  // 排序区间
  arr.sort((a, b) => (
    a[1] === b[1] ? 0 : a[1] > b[1] ? 1 : -1
  ))

  let res = 0, maxEnd = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] >= maxEnd) {
      maxEnd = arr[i][1]
      res++
    }
  }

  return res
}

// console.log(noOverLap([[1,3],[2,4], [3,4], [2,5]]))

/**
 * 55. 跳跃游戏
 */
function canJump(arr) {
  let rightmost = 0

  for (let i = 0; i < arr.length; i++) {
    if (i <= rightmost) {
      rightmost = Math.max(rightmost, i + arr[i])
      if (rightmost >= n - 1) {
        return true
      }
    }
  }

  return false
}

function canJump2(arr) {
  if (arr.length === 1) return true

  function backtracking(current) {
    if (current === 0) return true

    for (let i = 0; i < current; i++) {
      if (current <= i + arr[i]) {
        return backtracking(i)
      }
    }

    return false
  }

  return backtracking(arr.length - 1)
}

// console.log(canJump2([3,2,1,0,4]))


/**
 * 45. 跳跃游戏 II
 */
function canJump3(nums) {
  let res = 0, r = nums.length - 1

  while (r != 0) {
    for (let i = 0; i < r; i++) {
      if (i + nums[i] >= r) {
        r = i
        res++
        break
      }
    }
  }

  return res
}



/**
 * 1024. 视频拼接
 */
function videoStitching(clips, time) {
  let ends = []
  for (let i = 0; i < clips.length; i++) {
    ends[clips[i][0]] = Math.max(clips[i][1], ends[clips[i][0]] || 0)
  }

  let res = 0, pre = 0, end = 0

  for (let i = 0; i <= time; i++) {
    end = Math.max(ends[i] || 0, end)

    if (i >= end) {
      return -1
    }

    if (i === pre) {
      pre = end
      res++
    }
  }

  return res
}


/**
 * 871. 最低加油次数
 */
function minRefuelStops(target, startFuel, stations) {
  let h = []
}


/**
 * 179. 最大数
 */
function largestNumber(nums) {
  let sn = nums.map((a) => '' + a)

  sn.sort((a, b) => (
    Number(a + b) > Number(b + a) ? -1 : 1
  ))

  res = sn.join('')

  return Number(res) === 0 ? '0' : res
}

// console.log(largestNumber([3,30,34,5,9]))


/**
 * 334. 递增的三元子序列
 */
function increasingTriplet(nums) {
  if (nums.length < 3) return false
  let first = nums[0], second = Infinity

  for (let i = 1; i < nums.lenght; i++) {
    let num = nums[i]
    if (second < num) {
      return true
    } else if (num > first) {
      second = num
    } else {
      first = num
    }
  }

  return false
}


/**
 * 376. 摆动序列
 */
function wiggleMaxLength(nums) {
  if (nums.length < 2) return 1

  let preDif = nums[1] - nums[0]

  let res = preDif === 0 ? 1 : 2
  for (let i = 2; i < nums.length; i++) {
    let cDif = nums[i] - nums[i-1]
    if ((cDif < 0 && preDif >=0) || (cDif > 0 && preDif <= 0)) {
      res++
      preDif = cDif
    }
  }
  return res
}