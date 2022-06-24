function deepClone(target) {
    let currentObj = {};
    for (let [key, value] of Object.entries(target)) {
        let currentValue = value;

        if (typeof value === 'object') {
            currentValue = deepClone(value);
        }
        if (Array.isArray(value)) {
            currentValue = [...value]
        }
        currentObj[key] = currentValue;
    }
    return currentObj;
}


let test = {
    a: "bla",
    b: {
        c: "neh",
        d: "ge",
        v: {
            as: "booh"
        }
    }
}

let test1 = {
    a: "bla",
    b: {
        c: "neh",
        d: "ge",
        v: {
            as: "booh",
            asd: {
                bla: [{
                    test: "bla", bj: {nm: 3}
                }]
            }
        }
    }
}


// console.log(JSON.stringify(test) === JSON.stringify(deepClone(test)))

console.log(deepClone(test1))

console.log(JSON.stringify(test1) === JSON.stringify(deepClone(test1)))
