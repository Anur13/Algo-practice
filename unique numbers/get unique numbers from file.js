
const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {

    const rl = readline.createInterface({
        input: fs.createReadStream('input.txt'),
        crlfDelay: Infinity
    });

    let logger = fs.createWriteStream('output.txt', {
        flags: 'a' // 'a' means appending (old data will be preserved)
    })

    let prevLine;
    let count = 0;
    for await (const line of rl) {
        if (count === 0) {
            count++;
            prevLine = line;
            continue;
        }

        if (prevLine !== line) {
            logger.write(`${line}\n`);
            prevLine = line;
        }
    }
    rl.close();
    logger.close();
}

processLineByLine();
