# 二分
有序皆可二分

关键点：
- 开闭原则：每一个区间都要按照开闭原则
  - 封闭 - 符合核心的二分搜索逻辑
    - 排除一半的搜索范围
    - 根据当前元素与中间元素的比较不断缩小范围
    - 最终找到元素或搜索范围为空
  - 开放 - 易于扩展
    - 处理不同类型的输入如数列、字符串等
    - 提供不同的停止标准如找到元素或搜索范围为空
    - 提供不同的中间点计算方式如找中位数而非平均数
    - 支持额外的功能性如元素计数、总序排等
- 区间变化

注意点：
- 循环什么时候终止
  - 即 `l<r` 和 `l<=r` 的选择
  - 当搜索范围包含上下界时，l == r 时，数组中还有一个元素需要搜索
- 什么时候更新左边界，如何更新
  - 即 `l=mid` 和 `l=mid+1` 的选择
- 什么时候更新右边界，如何更新


lowerBound：寻找元素下界
```js
function lowerBound(arr, n, target) {
  let l = 0, r = n
  while (l < r) {
    let mid = l + ((r-l) >> 1)

    if (arr[mid] < target) {
      l = mid + 1
    } else {
      r = mid
    }
  }  

  return l
}
```

upperBound：寻找元素上界
```js
function upperBound(arr, n, target) {
  let l = 0, r = n

  while (l<r) {
    let mid = l + ((r - l) >> 1)

    if (arr[mid] <= target) {
      l = mid + 1
    } else {
      r = mid
    }
  }

  return l
}
```

# 题目
- 有序数组最左边的位置：给定有序数组和target，求target在数组中最左的位置