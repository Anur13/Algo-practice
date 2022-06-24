//FIND THE COMBINATIONS OF NUMBERS THAT PRODUCE SUM
function howSum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    if (numbers.length === 0) return [];

    for (let number of numbers) {
        let remainder = targetSum - number;
        let res = howSum(remainder, numbers);
        if (res !== null) {
            memo[targetSum] = [...res, number];
            return memo[targetSum]
        }
    }
    memo[targetSum] = null;
    return null;
}


// console.log(howSum(7, [5, 3, 4, 7])) //[3,4], [7]
// console.log(howSum(8, [2, 3, 5])) //[2,2,2,2], [3,5]
// console.log(howSum(7, [2, 3]))//  []


function howSumTabulation(targetSum, numbers) {
    const table = new Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i]) {
            for (let number of numbers) {
                let sum = i + number;
                if (sum <= targetSum) {
                    table[sum] = [...table[i], number]
                }
            }
        }
    }
    return table[targetSum];
}

console.log(howSumTabulation(7, [5, 3, 4, 7])) //[3,4], [7]
// console.log(howSumTabulation(8, [2, 3, 5])) //[2,2,2,2], [3,5]
// console.log(howSumTabulation(7, [2, 3]))//  []

