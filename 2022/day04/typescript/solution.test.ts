import { partOne, partTwo } from "./solution";
import { readFileSync } from "fs";
import { expect, test } from "vitest";

const input = readFileSync(`${__dirname}/../input`).toString();

test("has partOne answer", () => {
    expect(partOne(input)).toBeDefined();
});

const partOneCases = [
    [
        `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`,
        2,
    ],
] as const;
const partOneAnswer = 464;
const partTwoCases = [
    [
        `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`,
        4,
    ],
] as const;
const partTwoAnswer = 770;

partOneCases.forEach((v, i) => {
    test("partOne: case " + i, () => {
        expect(partOne(v[0])).toEqual(v[1]);
    });
});

partTwoCases.forEach((v, i) => {
    test("partTwo: case " + i, () => {
        expect(partTwo(v[0])).toEqual(v[1]);
    });
});

test("has input", () => {
    expect(input.length).toBeGreaterThan(0);
    expect(input).toBeDefined();
});

if (partOneAnswer) {
    test("matches partOne answer (if known)", () => {
        expect(partOne(input)).toEqual(partOneAnswer);
    });
}

if (partTwoAnswer) {
    test("matches partTwo answer (if known)", () => {
        expect(partTwo(input)).toEqual(partTwoAnswer);
    });
}

console.log("partOne answer", partOne(input));
console.log("partTwo answer", partTwo(input));
