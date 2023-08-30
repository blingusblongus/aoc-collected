import { partOne, partTwo } from "./solution";
import { readFileSync } from "fs";
import { expect, test } from "vitest";

const input = readFileSync(`${__dirname}/../input`).toString();

test("has input", () => {
    expect(input.length).toBeGreaterThan(0);
    expect(input).toBeDefined();
});

const partOneCases = [] as const;
const partOneAnswer = null;
const partTwoCases = [] as const;
const partTwoAnswer = null;

// Part Two
partOneCases.forEach((v, i) => {
    test("partOne: case " + i, () => {
        let result = partOne(v[0]);
        expect(result).toBeDefined();
        expect(result).is.not.null;
        expect(result).toEqual(v[1]);
    });
});

if (partOneAnswer) {
    test("matches partOne answer (if known)", () => {
        let result = partOne(input);
        expect(result).toBeDefined();
        expect(result).is.not.null;
        expect(result).toEqual(partOneAnswer);
    });
}

// Part Two
partTwoCases.forEach((v, i) => {
    test("partTwo: case " + i, () => {
        let result = partTwo(v[0]);
        expect(result).toBeDefined();
        expect(result).is.not.null;
        expect(result).toEqual(v[1]);
    });
});

if (partTwoAnswer) {
    test("matches partTwo answer (if known)", () => {
        let result = partTwo(input);
        expect(result).toBeDefined();
        expect(result).is.not.null;
        expect(partTwo(input)).toEqual(partTwoAnswer);
    });
}

console.log("partOne answer", partOne(input));
console.log("partTwo answer", partTwo(input));
