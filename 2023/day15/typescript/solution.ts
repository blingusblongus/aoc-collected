export function partOne(input: string) {
    const items = parseInput(input)
    return items.reduce((sum, item) => sum += hashString(item), 0);
}

function parseInput(input: string) {
    return input.trim().split(',');
}

export function hashString(s: string) {
    let result = 0;

    for (let letter of s) {
        let charCode = letter.charCodeAt(0)
        result += charCode;
        result *= 17;
        result = result % 256;
    }
    return result;
}
