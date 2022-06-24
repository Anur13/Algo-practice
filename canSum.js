//FIND IF NUMBERS IN ARRAY CAN PRODUCE GIVEN SUM
function canSum(target, numbers, memo = {}) {
    if (target === 0) return true;
    if (target < 0) return false;
    if (target in memo) return memo[target];
    for (let num of numbers) {
        let remainder = target - num;
        if (canSum(remainder, numbers, memo) === true) {
            memo[target] = true;
            return true;
        }
    }
    memo[target] = false;
    return false;
}

//
// console.log(canSum(7, [5, 3, 4, 7])) // true
// console.log(canSum(7, [2, 4])) //false
// console.log(canSum(300, [7, 14])) //false

function canSumTab(target, numbers) {
    const table = Array(target + 1).fill(false);
    // console.log(table)

    table[0] = true;
    for (let i = 0; i <= target; i++) {
        if (table[i]) {
            for (let j = 0; j < numbers.length; j++) {
                let count = i + numbers[j];
                if (count <= target) {
                    table[count] = true;
                }
            }
        }
    }
console.log(table)
    return table[target];
}

console.log(canSumTab(7, [5, 3, 4])) // true
console.log(canSumTab(7, [2, 4])) //false
console.log(canSumTab(300, [7, 14])) //false
