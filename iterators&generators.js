function* abcs() {
    yield 'a';
    yield 'b';
    yield 'c';
}

for (let letter of abcs()) {
    // console.log(letter.toUpperCase());
}
// A
// B
// C
// [...abcs()] // [ "a", "b", "c" ]


cardDeck = {
    suits: ["♣️", "♦️", "♥️", "♠️"],
    court: ["J", "Q", "K", "A"],
    [Symbol.iterator]: function* () {
        for (let suit of this.suits) {
            for (let i = 2; i <= 10; i++) yield suit + i;
            for (let c of this.court) yield suit + c;
        }
    }
}
// console.log(cardDeck)
//
// console.log([...cardDeck])

for (let item of cardDeck) {
    console.log(item)
}


function* infinityAndBeyond() {
    let i = 1;
    while (true) {
        yield i++;
    }
}

function* take(n, iterable) {
    for (let item of iterable) {
        if (n <= 0) return;
        n--;
        yield item;
    }
}

taken = [...take(5, infinityAndBeyond())]

// taken = Array(5) [
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// 4: 5
// ]


function binaryTreeNode(value) {
    let node = {value};
    node[Symbol.iterator] = function* depthFirst() {
        yield node.value;
        if (node.leftChild) yield* node.leftChild;
        if (node.rightChild) yield* node.rightChild;
    };
    return node;
}

function tree() {
    const root = binaryTreeNode("root");
    root.leftChild = binaryTreeNode("branch left");
    root.rightChild = binaryTreeNode("branch right");
    root.leftChild.leftChild = binaryTreeNode("leaf L1");
    root.leftChild.rightChild = binaryTreeNode("leaf L2");
    root.rightChild.leftChild = binaryTreeNode("leaf R1");
    return root;
}

// console.log([...tree()])



let arr = [1,2,3,4]

function* testStartYield(){
    yield* arr;
}

let test = testStartYield();
console.log(test.next()) // 1
console.log(test.next()) // 2



getSwapiPagerator = (endpoint) =>
    async function* () {
        const axios = require('axios');
        let nextUrl = `https://swapi.dev/api/${endpoint}`;
        while (nextUrl) {
            const response = await axios.get(nextUrl);
            nextUrl = response.data.next;
            yield* response.data.results;
        }
    }
// Example adapted from Luciano Mammino's https://www.nodejsdesignpatterns.com/blog/javascript-async-iterators/

starWars = ({
    characters: {
        [Symbol.asyncIterator]: getSwapiPagerator("people")
    },
    planets: {
        [Symbol.asyncIterator]: getSwapiPagerator("planets")
    },
    ships: {
        [Symbol.asyncIterator]: getSwapiPagerator("starships")
    }
})

async function*  getRes() {
    const results = [];
    for await (const page of starWars.ships) {
        console.log(page.name);
        results.push(page.name);
    }
    yield* results;

}
console.log(getRes().next())
