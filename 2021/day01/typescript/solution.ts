export function partOne(input: string) {
    const measurements = inputToArr(input);
    return increasingIntervals(measurements, 1);
}

export function partTwo(input: string) {
    const measurements = inputToArr(input);
    return increasingIntervals(measurements, 3);
}

function increasingIntervals(arr: number[], window: number) {
    if (window < 1 || window > arr.length - 1) throw Error("invalid window");

    let count = 0;
    let prev = 0;
    let curr = 0;

    for (let i = window; i < arr.length; ++i) {
        for (let j = 0; j < window; ++j) {
            curr += arr[i - j];
        }

        if (curr > prev) ++count;
        prev = curr;
        curr = 0;
    }
    return count;
}

function inputToArr(input: string): number[] {
    return input
        .trim()
        .split(/\n/g)
        .map((x) => parseInt(x));
}
