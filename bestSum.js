//FIND THE SHORTEST/BEST COMBINATION OF NUMBERS THAT PRODUCE GIVEN SUM
function bestSum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    let shortest = null;

    for (let number of numbers) {
        let remainder = targetSum - number;
        let res = bestSum(remainder, numbers, memo);
        if (res !== null) {
            let combination = [...res, number];
            if (shortest === null || combination.length < shortest.length) {
                shortest = combination;
            }
        }
    }
    memo[targetSum] = shortest;
    return shortest;
}

// console.log(bestSum(7, [5, 3, 4, 2])) //[2,5]
// console.log(bestSum(8, [1, 3, 4, 5])) // [3,5]
// console.log(bestSum(100, [1, 2, 5, 25]))//  [25,25,25,25]


// function bestSumTabulation(targetSum, numbers) {
//     const table = new Array(targetSum + 1).fill(null);
//     table[0] = [[]];
//     for (let i = 0; i <= targetSum; i++) {
//         if (table[i]) {
//             for (let number of numbers) {
//                 let sum = number + i;
//                 if (sum <= targetSum) {
//                     if (!table[sum]) {
//                         table[sum] = table[i].map(item => [...item, number]);
//                     } else {
//                         table[sum] = [...table[sum], ...table[i].map(item => [...item, number])];
//                     }
//                 }
//             }
//         }
//     }
//     return table[targetSum].sort((a, b) => a.length - b.length)[0];
// }


//IMPROVED TABULATION
function bestSumTabulation(targetSum, numbers) {
    const table = new Array(targetSum + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= targetSum; i++) {
        if (table[i]) {
            for (let number of numbers) {
                let sum = number + i;
                if (!table[sum] || table[sum].length > table[i].length + 1) {
                    table[sum] = [...table[i], number]
                }
            }
        }
    }
    return table[targetSum];
}

console.log(bestSumTabulation(7, [5, 3, 4, 2])) //[2,5]
console.log(bestSumTabulation(8, [1, 3, 4, 5])) // [3,5]
console.log(bestSumTabulation(100, [1, 2, 5, 25]))//  [25,25,25,25]
