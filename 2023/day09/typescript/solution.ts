export function partOne(input: string) {
    const histories = parseInput(input);
    let result = 0;


    for (let history of histories) {
        const extrapolation = extrapolateHistory(history);
        result += extrapolation;
    }

    return result;
}

function getDifferences(nums: number[]) {
    const result: number[] = [];
    for (let i = 1; i < nums.length; ++i) {
        result.push(nums[i] - nums[i - 1]);
    }
    return result
}

export function partTwo() {
    return null;
}

function parseInput(input: string) {
    return input.trim().split(/\n/)
        .map(line => line.split(/\s/).map(Number))
}

function extrapolateHistory(history: number[]) {
    const arrs: number[][] = [history]
    let last = history;

    while (last.some(num => num !== 0)) {
        arrs.push(getDifferences(last));
        last = arrs[arrs.length - 1];
    }

    let result = 0;
    for (let i = arrs.length - 2; i > -1; --i) {
        let currLine = arrs[i];
        result = currLine[currLine.length - 1] + result;
    }

    return result;
}
