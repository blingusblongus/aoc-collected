import { partOne, partTwo } from "./solution";
import { readFileSync } from "fs";
import { expect, test } from "vitest";

const input = readFileSync(`${__dirname}/../input`).toString();

test("has input", () => {
    expect(input.length).toBeGreaterThan(0);
    expect(input).toBeDefined();
});

const testInput = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;
const partOneCases = [[testInput, 198]] as const;
const partOneAnswer = 2743844;
const partTwoCases = [[testInput, 230]] as const;
const partTwoAnswer = 6677951;

// Part Two
partOneCases.forEach((v, i) => {
    test("partOne: case " + i, () => {
        expect(partOne(v[0])).toBeDefined();
        expect(partOne(v[0])).is.not.null;
        expect(partOne(v[0])).toEqual(v[1]);
    });
});

if (partOneAnswer) {
    test("matches partOne answer (if known)", () => {
        expect(partOne(input)).toBeDefined();
        expect(partOne(input)).is.not.null;
        expect(partOne(input)).toEqual(partOneAnswer);
    });
}

// Part Two
partTwoCases.forEach((v, i) => {
    test("partTwo: case " + i, () => {
        expect(partTwo(input)).toBeDefined();
        expect(partTwo(input)).is.not.null;
        expect(partTwo(v[0])).toEqual(v[1]);
    });
});

if (partTwoAnswer) {
    test("matches partTwo answer (if known)", () => {
        expect(partTwo(input)).toBeDefined();
        expect(partTwo(input)).is.not.null;
        expect(partTwo(input)).toEqual(partTwoAnswer);
    });
}

console.log("partOne answer", partOne(input));
console.log("partTwo answer", partTwo(input));
