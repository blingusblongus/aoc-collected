import { partOne, partTwo } from "./solution";
import { readFileSync } from "fs";
import { expect, test } from "vitest";

const input = readFileSync(`${__dirname}/../input`).toString();

test("has input", () => {
    expect(input.length).toBeGreaterThan(0);
    expect(input).toBeDefined();
});

const testInput = `199
200
208
210
200
207
240
269
260
263
`;
const partOneCases = [[testInput, 7]] as const;
const partOneAnswer = 1390;
const partTwoCases = [[testInput, 5]] as const;
const partTwoAnswer = 1457;

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
        expect(partTwo(v[0])).toBeDefined();
        expect(partTwo(v[0])).is.not.null;
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
