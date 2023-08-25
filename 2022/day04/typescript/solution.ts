export function partOne(input: string) {
    let count = 0;
    for (let pair of parseInput(input)) {
        const [first, second] = pair;

        if (checkContain(first, second) || checkContain(second, first)) count++;
    }

    return count;
}

export function partTwo(input: string) {
    let count = 0;
    for (let pair of parseInput(input)) {
        const [first, second] = pair;

        if (checkOverlap(first, second)) count++;
    }

    return count;
}

function parseInput(input: string) {
    return input
        .trim()
        .split(/\n/g)
        .map((el) =>
            el.split(",").map((el) => el.split("-").map((el) => Number(el)))
        );
}

function checkContain(x: number[], y: number[]) {
    return x[0] <= y[0] && x[1] >= y[1];
}

function checkOverlap(x: number[], y: number[]) {
    return x[1] >= y[0] && y[1] >= x[0];
}
