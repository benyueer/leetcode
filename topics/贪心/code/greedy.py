def maxArea(height: list) -> int:
    """
    11. 盛最多水的容器
    """
    (l, r, res) = (0, len(height) - 1, 0)
    while l < r:
        hl = height[l]
        hr = height[r]
        res = max(res, (r-l)*min(hl, hr))
        if hl < hr:
            l+=1
        else:
            r-=1
    return res

if __name__ == '__main__':
    print(maxArea([1,8,6,2,5,4,8,3,7]))
