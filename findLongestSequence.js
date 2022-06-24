const assert = require("assert");

const numbers = process.stdin;

function findLongestSequence(numbers) {
    const numsArray = numbers.split(" ");

    function findSequence(numbers, currentNum, index) {
        let res = []
        for (let i = index; i < numbers.length; i++) {
            let num = numbers[i];
            if (+num > +currentNum) {
                let currentSequence = findSequence(numbers, num, i)
                if (currentSequence.length > res.length) {
                    res = [...currentSequence];
                }
            }
        }
        res.push(currentNum);
        return res;
    }

    // We need to make sure that each number of the sequence is used as a "currentNum"
    function initiateRecursionWithNumber(numbers) {
        let res = []
        for (let i = 0; i < numbers.length; i++) {
            let currentSequence = findSequence(numbers, numbers[i], i);
            if (currentSequence.length > res.length) {
                res = [...currentSequence];
            }
        }
        return res;
    }
    return initiateRecursionWithNumber(numsArray).reverse().join(" ")
}


let res = findLongestSequence("9 3 7 4 6 9 3 13 5 0");
assert.equal(res, "3 4 6 9 13")

res = findLongestSequence("50 3 10 7 40 80");
assert.equal(res, "3 10 40 80")

res = findLongestSequence("3 10 2 1 20");
assert.equal(res, "3 10 20")
