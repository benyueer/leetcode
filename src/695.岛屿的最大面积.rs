/*
 * @lc app=leetcode.cn id=695 lang=rust
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
impl Solution {
    pub fn max_area_of_island(grid: Vec<Vec<i32>>) -> i32 {
        let mut res = 0;
        let mut grid = grid;

        fn dfs<'a>(
            grid: &mut Vec<Vec<i32>>,
            x: usize,
            y: usize,
            ans: &'a mut i32,
            res: &'a mut i32,
        ) {
            *ans += 1;
            grid[x][y] = 0;
            *res = *res.max(ans);

            let dirs: [[i32; 2]; 4] = [[0, 1], [0, -1], [1, 0], [-1, 0]];

            let xlen = grid.len();
            let ylen = grid[0].len();

            dirs.into_iter().for_each(|dir| {
                let cx = x as i32 + dir[0];
                let cy = y as i32 + dir[1];
                if cx >= 0
                    && cx < xlen as i32
                    && cy >= 0
                    && cy < ylen as i32
                    && grid[cx as usize][cy as usize] == 1
                {
                    dfs(grid, cx as usize, cy as usize, ans, res);
                }
            })
        }

        for x in 0..grid.len() {
            for y in 0..grid[x].len() {
                match grid[x][y].cmp(&1) {
                    std::cmp::Ordering::Equal => {
                        dfs(&mut grid, x, y, &mut 0, &mut res)
                    }
                    _ => (),
                }
            }
        }

        res
    }
}
// @lc code=end

