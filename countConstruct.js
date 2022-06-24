//FIND HOW MANY COMBINATIONS FROM ARRAY ARE POSSIBLE TO CREATE GIVEN STRING
//V1
function countConstruct(target, wordBank, memo = {}) {
    if (target === "") return 1;
    if (target in memo) return memo[target]
    let count = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const res = countConstruct(suffix, wordBank, memo);
            if (res !== 0) {
                memo[target] = res;
                count += res;
            }
        }
    }
    memo[target] = count;
    return count;
}
console.log(countConstruct("abcdef", ["abc", "ab", "cd", "def", "abcd"]))
console.time("bla")
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
console.timeEnd("bla")

console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.time("pa")
console.log(countConstruct("eeeeeeeeeeeeeeeeeeef", ["e", "eeee", "eee", "eeeeee", "eeee", "eeeeeeee", "eeeeeeeeeee"]))
console.timeEnd("pa")


//V2
function countConstruct1(target, wordBank, current = "", memo = {}) {
    if (current in memo) return memo[current]
    if (current === target) return 1;
    if (current.length > target.length || !target.includes(current)) return 0;
    let count = 0;
    for (let word of wordBank) {
        count += countConstruct1(target, wordBank, current + word, memo);
    }
    memo[current] = count;
    return count;
}

console.log(countConstruct1("abcdef", ["abc", "ab", "cd", "def", "abcd"]))
console.time("bla")
console.log(countConstruct1("purple", ["purp", "p", "ur", "le", "purpl"]))
console.timeEnd("bla")

console.log(countConstruct1("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(countConstruct1("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.time("pa")
console.log(countConstruct1("eeeeeeeeeeeeeeeeeeef", ["e", "eeee", "eee", "eeeeee", "eeee", "eeeeeeee", "eeeeeeeeeee"]))
console.timeEnd("pa")
