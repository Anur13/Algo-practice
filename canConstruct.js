
//FIND IF A GIVEN STRING CAN BE CREATED FROM STRINGS IN ARRAY
//V1
function canConstruct(target, wordBank, current = "") {
    if (current === target) return true;
    if (current.length > target.length || !target.includes(current)) return false;
    for (let word of wordBank) {
        if (canConstruct(target, wordBank, current + word)) {
            return true;
        }
    }
    return false;
}
console.log(canConstruct("abcdef", ["abc", "ab", "cd", "def", "abcd"]))
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(canConstruct("eeeeeeeeeeeeeeeeeeef", ["e", "eeee", "eee", "eeeeee", "eeee", "eeeeeeee", "eeeeeeeeeee"]))

//V2
function canConstruct1(target, wordBank, memo = {}) {
    if (target === "") return true;
    if (target in memo) return memo[target]
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct1(suffix, wordBank, memo) === true) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

console.log(canConstruct1("abcdef", ["abc", "ab", "cd", "def", "abcd"]))
console.log(canConstruct1("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(canConstruct1("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(canConstruct1("eeeeeeeeeeeeeeeeeeef", ["e", "eeee", "eee", "eeeeee", "eeee", "eeeeeeee", "eeeeeeeeeee"]))

