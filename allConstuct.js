
//FIND ALL POSSIBLE COMBINATION FROM ARRAY TO CREATE GIVEN STRING
//V1
function allConstruct(target, wordBank, memo = {}) {
    if (target === "") return [[]];
    if (target in memo) return memo[target];
    const result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const res = allConstruct(suffix, wordBank);
            const test = res.map(item => [word, ...item])
            result.push(...test)
        }
    }
    memo[target] = result;
    return result;
}
console.log(allConstruct("abcdef", ["abc", "ab", "cd", "def", "abcd"]));
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));

//V2
function allConstruct1(target, wordBank, current = "",memo={}) {
    if (current in memo) return memo[current];
    if (current === target) return [[]];
    if (current.length > target.length || !target.includes(current)) return null;
    let result = [];
    for (let word of wordBank) {
        let res = allConstruct1(target, wordBank, current + word,memo);
        if (res) {
            let wordAdded = res.map(item => [...item, word]);
            result.push(...wordAdded);
        }
    }
    memo[current] = result;
    return result;
}


console.log(allConstruct1("abcdef", ["abc", "ab", "cd", "def", "abcd"]));
console.log(allConstruct1("purple", ["purp", "p", "ur", "le", "purpl"]));

