import { partOne, partTwo } from "./solution";
import { readFileSync } from "fs";
import { expect, test } from "vitest";

const input = readFileSync(`${__dirname}/../input`).toString();

test("has input", () => {
    expect(input.length).toBeGreaterThan(0);
    expect(input).toBeDefined();
});

const testInput = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;
const partOneCases = [[testInput, 150]] as const;
const partOneAnswer = 2272262;
const partTwoCases = [[testInput, 900]] as const;
const partTwoAnswer = 2134882034;

// Part Two
partOneCases.forEach((v, i) => {
    test("partOne: case " + i, () => {
        expect(partOne(input)).toBeDefined();
        expect(partOne(input)).is.not.null;
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
