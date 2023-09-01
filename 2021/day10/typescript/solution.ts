export function partOne(input: string) {
    const lines = parseInput(input);
    let score = 0;

    for (let line of lines) {
        let char = getFirstIllegalChar(line);
        if (char) {
            score += scoreChar(char);
        }
    }
    return score;
}

export function partTwo(input: string) {
    return null;
}

function parseInput(input: string) {
    return input.trim().split(/\s*\n/g);
}

function getFirstIllegalChar(line: string) {
    let copy = line.slice();

    const re = /\(\)|\[\]|<>|\{\}/g;
    const endRe = /\)|\]|>|\}/;

    while (re.test(copy)) {
        copy = copy.replace(re, "");
    }

    const match = copy.match(endRe);

    return match?.[0];
}

function scoreChar(char: string) {
    switch (char) {
        case ")":
            return 3;
        case "]":
            return 57;
        case "}":
            return 1197;
        case ">":
            return 25137;
        default:
            throw Error("Couldn't match scoring character: " + char);
    }
}
