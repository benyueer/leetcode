/**
 * 1653. 使字符串平衡的最少删除次数
 */
function minimumDeletions(s) {
  let stack = [], res = 0
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === 'a') {
      if (stack.length) {
        stack.pop()
        res++
      }
    } else {
      stack.push(1)
    }
  }

  return res
}

/**
 * 1673. 找出最具竞争力的子序列
 */
function mostCompetitive(nums, k) {
  let stack = []
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && stack[stack.length - 1] > nums[i] && stack.length + nums.length - i > k) {
      stack.pop()
    }

    stack.push(nums[i])
  }

  return stack.slice(0, k)
}



/**
 * 1700. 无法吃午餐的学生数量
 */
function countStudents(students, sandwiches) {
  while (students.length) {
    if (students.indexOf(sandwiches[0]) === -1) break
    if (students[0] === sandwiches[0]) {
      students.splice(0, 1)
      sandwiches.splice(0, 1)
    } else {
      let s = students[0]
      students.splice(0, 1)
      students.push(s)
    }
  }
  return students.length
}


/**
 * 42. 接雨水
 */
function trap(height) {
  let stack = [], res = 0

  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[stack[stack.length - 1]] < height[i]) {
      let cur = stack.pop()
      if (!stack.length) break

      let pre = stack[stack.length - 1]
      let len = i - pre - 1
      let h = Math.min(height[i], height[pre]) - height[cur]

      res += len * h
    }
    stack.push(i)
  }

  return res
}


/**
 * 71. 简化路径
 */
function simplifyPath(path) {
  let stack = [], rPath = path.split('/')

  for (let i = 0; i < rPath.length; i++) {
    let c = rPath[i]
    if (!c) continue
    switch(c) {
      case '/':
      case '.':
        break
      case '..':
        stack.pop()
        break
      default:
        stack.push(c)
    }
  }

  return '/' + stack.join('/')
}


/**
 * 84. 柱状图中最大的矩形
 */
function largestRectangleArea(heights) {
  let stack = [], res = 0
  heights.push(0)
  heights.splice(0, 0, 0)

  for (let i = 0; i < heights.length; i++) {
    while(stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      let cur = stack.pop()
      let w = i - stack[stack.length - 1] -1
      res = Math.max(res, w * heights[cur])
    }

    stack.push(i)
  }

  return res
}



/**
 * 85. 最大矩形
 */
function maximalRectangle(matrix) {
  if (matrix.length === 0) return 0

  function largestRectangleArea(heights) {
    let stack = [], res = 0
    heights.push(0)
    heights.splice(0, 0, 0)
  
    for (let i = 0; i < heights.length; i++) {
      while(stack.length && heights[stack[stack.length - 1]] > heights[i]) {
        let cur = stack.pop()
        let w = i - stack[stack.length - 1] -1
        res = Math.max(res, w * heights[cur])
      }
  
      stack.push(i)
    }
  
    return res
  }

  let res = 0, heights = Array(matrix[0].length).fill(0)

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '1') {
        heights[j]++
      } else {
        heights[j] = 0
      }
    }

    res = Math.max(res, largestRectangleArea([...heights]))
  }

  return res
}


/**
 * 150. 逆波兰表达式求值
 * ["4","13","5","/","+"]
 * ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
 * 
 */
function evalRPN(tokens) {
  let res = 0, stack = []
  for(let i = 0; i < tokens.length; i++) {
    if (isNaN(tokens[i])) {
      let a = stack.pop()
      let b = stack.pop()
      let r

      switch (tokens[i]) {
        case '+':
          r = a + b
          break
        case '-':
          r = b - a
          break
        case '*':
          r = a * b
          break
        case '/':
          r = parseInt(b/a)
          break
      }
      stack.push(r)
    } else {
      stack.push(Number(tokens[i]))
    }
  }

  return stack[0]
}






