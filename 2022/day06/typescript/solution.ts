export function partOne(input: string) {
    return findRepeatInWindow(input, 4);
}

export function partTwo(input: string) {
    return findRepeatInWindow(input, 14);
}

function findRepeatInWindow(input: string, windowSize: number) {
    for (let i = windowSize - 1; i < input.length; i++) {
        const marker = new Set<string>();

        for (let j = 0; j < windowSize; j++) {
            marker.add(input[i - j]);
        }
        if (marker.size === windowSize) return i + 1;
    }
    return -1;
}
