export function partOne(input: string) {
    const entries = input
        .trim()
        .split(/\n/g)
        .map((line) => line.split(/\s\|\s|\s/g)); // for input data (no line break)

    let uniqueCount = 0;
    let uniqueLengths = [2, 3, 4, 7];

    //loop through only output values
    for (let entry of entries) {
        for (let i = 10; i < 14; ++i) {
            if (uniqueLengths.includes(entry[i].length)) ++uniqueCount;
        }
    }
    return uniqueCount;
}

export function partTwo(input: string) {
    return null;
}
