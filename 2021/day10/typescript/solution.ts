const autocompletions = {
    "(": ")",
    "[": "]",
    "<": ">",
    "{": "}",
};
const autocompletionScores = {
    ")": 1,
    "]": 2,
    "}": 3,
    ">": 4,
};

export function partOne(input: string) {
    const lines = parseInput(input);
    let score = 0;

    for (let line of lines) {
        let char = getFirstIllegalChar(line);
        if (char) {
            score += scoreIllegalChar(char);
        }
    }
    return score;
}

export function partTwo(input: string) {
    const lines = parseInput(input);
    let scores: number[] = [];

    for (let line of lines) {
        let char = getFirstIllegalChar(line);
        if (!char) {
            let completionStr = autocomplete(line);
            scores.push(scoreAutocompletion(completionStr));
        }
    }
    return scores.sort((a, b) => a - b)[Math.floor(scores.length / 2)];
}

function parseInput(input: string) {
    return input.trim().split(/\s*\n/g);
}

function autocomplete(line: string) {
    let copy = line.slice();
    let result = "";

    const re = /\(\)|\[\]|<>|\{\}/g;

    while (re.test(copy)) {
        copy = copy.replace(re, "");
    }

    for (let i = copy.length - 1; i >= 0; --i) {
        result += autocompletions[copy[i]];
    }

    return result;
}

function scoreAutocompletion(s: string) {
    let score = 0;
    for (let x of s) {
        score *= 5;
        score += autocompletionScores[x];
    }
    return score;
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

function scoreIllegalChar(char: string) {
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
