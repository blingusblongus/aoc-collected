import { partOne, partTwo } from "./solution";
import { readFileSync } from "fs";
import { expect, test, describe } from "vitest";
import { example1, example2, example3 } from "./examples";

const input = readFileSync(`${__dirname}/../input`).toString();

const useFullInput = true;
const partOneCases = [
    [example1, 10],
    [example2, 19],
    [example3, 226],
] as const;
const partOneAnswer = 4411;
const partTwoCases = [
    [example1, 36],
    [example2, 103],
    [example3, 3509],
] as const;
const partTwoAnswer = 136767;

describe("solution folder", () => {
    test("has input", () => {
        expect(input.length).toBeGreaterThan(0);
        expect(input).toBeDefined();
    });
});

describe("partOne", () => {
    partOneCases.forEach((v, i) => {
        test("fulfills case " + i, () => {
            let result = partOne(v[0]);
            expect(result).toBeDefined();
            expect(result).is.not.null;
            expect(result).toEqual(v[1]);
        });
    });

    if (partOneAnswer && useFullInput) {
        test("matches partOne answer (if known)", () => {
            let result = partOne(input);
            expect(result).toBeDefined();
            expect(result).is.not.null;
            expect(result).toEqual(partOneAnswer);
        });
    }
});

describe("partTwo", () => {
    partTwoCases.forEach((v, i) => {
        test("fulfills case " + i, () => {
            let result = partTwo(v[0]);
            expect(result).toBeDefined();
            expect(result).is.not.null;
            expect(result).toEqual(v[1]);
        });
    });

    if (partTwoAnswer && useFullInput) {
        test("matches partTwo answer (if known)", () => {
            let result = partTwo(input);
            expect(result).toBeDefined();
            expect(result).is.not.null;
            expect(partTwo(input)).toEqual(partTwoAnswer);
        });
    }
});

if (useFullInput) {
    console.log("partOne answer", partOne(input));
    console.log("partTwo answer", partTwo(input));
}
