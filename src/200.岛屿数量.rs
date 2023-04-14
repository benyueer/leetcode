/*
 * @lc app=leetcode.cn id=200 lang=rust
 *
 * [200] 岛屿数量
 */

// @lc code=start
impl Solution {
    pub fn num_islands(grid: Vec<Vec<char>>) -> i32 {
        let mut res = 0;
        let mut grid = grid;
        let columns: usize = grid[0].len();
        let raws: usize = grid.len();

        fn dfs(col: usize, row: usize, grid: &mut Vec<Vec<char>>, columns: usize, raws: usize) {
            let dirs: [[i32; 2]; 4] = [[0, 1], [0, -1], [1, 0], [-1, 0]];
            grid[row][col] = '0';

            for [x, y] in dirs {
                let nc = col + (x as usize);
                let nr = row + (y as usize);
                if nc >= 0 && nc < columns && nr >= 0 && nr < raws && grid[nr][nc] == '1' {
                    dfs(nc, nr, grid, columns, raws);
                }
            }
        }

        for i in 0..raws {
            for j in 0..columns {
                if (grid[i][j] == '1') {
                    res += 1;
                    dfs(j, i, &mut grid, columns, raws);
                }
            }
        }

        res
    }
}
// @lc code=end
