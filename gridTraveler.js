//GIVEN A STARTING POSITION OF A GRID,
//FIND HOW MANY WAYS CAN YOU REACH THE FINISH(1,1) BY MOVING EITHER DOWN OR LEFT
function gridTraveler(m, n, memo = {}) {
    const key = m + "," + n;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
    return memo[key];
}

// console.log(gridTraveler(3,3))
// console.log(gridTraveler(18,18))


function gridTravelerTab(m, n) {
    const table = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0))
    table[1][1] = 1;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (j < n) table[i][j + 1] += table[i][j];
            if (i < m) table[i + 1][j] += table[i][j];
        }
    }
    console.log(table);
    return table[m][n];
}

console.log(gridTravelerTab(3, 3))
