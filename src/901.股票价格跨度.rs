/*
 * @lc app=leetcode.cn id=901 lang=rust
 *
 * [901] 股票价格跨度
 */

// @lc code=start
struct StockSpanner {
    prices: Vec<i32>,
        ind: Vec<i32>
}


/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl StockSpanner {

    fn new() -> Self {
        StockSpanner { prices: vec![], ind: vec![] }
    }
    
    fn next(&mut self, price: i32) -> i32 {
        let mut res = 1;
        while !self.prices.is_empty() && price >= self.prices.last().unwrap().to_owned() {
            self.prices.pop();
            res += self.ind.pop().unwrap().to_owned();
        }
        self.prices.push(price);
        self.ind.push(res);

        res
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * let obj = StockSpanner::new();
 * let ret_1: i32 = obj.next(price);
 */
// @lc code=end

