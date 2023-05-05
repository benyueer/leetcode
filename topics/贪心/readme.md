# 贪心算法

运用：
- 哈夫曼树
- 单源最短路径（Dijkstra）
- Prim
- Kruskal

## 特点
1. 只选局部最优解
   总是把局部次优解直接扔掉，保留局部最优解，最终得到整个问题的最优解
2. 不能“逆袭”
   局部最优解不一定是全局最优解


## 不同类型的贪心算法
- 选择排序
  - [11. 盛最多水的容器](https://leetcode.cn/problems/container-with-most-water/)
  - [42.接雨水](https://leetcode.cn/problems/trapping-rain-water/)
  - 不重叠区间
    > 给定一些区间,求相互不重叠区间的最大个数
      例：\[[1,2],[2,3],[3,4],[1,3]]
      3  [1,2],[2,3],[3,4]
  - 删除最少区间
    > 给定一组区间，求删除最少几个区间使得剩余区间不重叠
      例：\[[1,2],[2,3],[1,4]]
      1  删除[1,4]
  - [763. 划分字母区间](https://leetcode.cn/problems/partition-labels/?utm_source=LCUS&utm_medium=ip_redirect&utm_campaign=transfer2china)
    > 给定一个字符串，需要尽可能多的切片，但是一个字符只能在一个切片里
      例：A='abcabdefg'
      5个切片，最多可分为['abcab', 'd', 'e', 'f', 'g']
  - 合并区间
  - [55. 跳跃游戏](https://leetcode.cn/problems/jump-game/)
    > 给定数组A，A[i]表示青蛙站在index=i的位置最多能跳A\[i+A[i]]，请问青蛙从index=0出发，能不能跳到A.length-1
  - [45. 跳跃游戏 II](https://leetcode.cn/problems/jump-game-ii/)
  - [1024. 视频拼接](https://leetcode.cn/problems/video-stitching/)
  - [871. 最低加油次数](https://leetcode.cn/problems/minimum-number-of-refueling-stops/)
  - 最大连续子数组
  - 环形数组最大子数组和
  - [179. 最大数](https://leetcode.cn/problems/largest-number/)
  - [334. 递增的三元子序列](https://leetcode.cn/problems/increasing-triplet-subsequence/)
  - [376. 摆动序列](https://leetcode.cn/problems/wiggle-subsequence/)
  - [611. 有效三角形的个数](https://leetcode.cn/problems/valid-triangle-number/)
  - [2007. 从双倍数组中还原原数组](https://leetcode.cn/problems/find-original-array-from-doubled-array/)
- 背包问题
- 最小生成树
- 单源最短路径
- 作业调度问题
- 霍夫曼编码