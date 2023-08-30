import { getLineType, partOne, partTwo } from "./solution";
import { readFileSync } from "fs";
import { expect, test, describe } from "vitest";

const input = readFileSync(`${__dirname}/../input`).toString();

describe("solution folder", () => {
    test("has input", () => {
        expect(input.length).toBeGreaterThan(0);
        expect(input).toBeDefined();
    });
});

const testInput = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;

const partOneCases = [[testInput, 5]] as const;
const partOneAnswer = 4655;
const partTwoCases = [[testInput, 12]] as const;
const partTwoAnswer = 20500;
const testFullInput = true;

describe("partOne", () => {
    partOneCases.forEach((v, i) => {
        test("partOne: case " + i, () => {
            let result = partOne(v[0]);
            expect(result).toBeDefined();
            expect(result).is.not.null;
            expect(result).toEqual(v[1]);
        });
    });
    if (partOneAnswer && testFullInput) {
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
        test("partTwo: case " + i, () => {
            let result = partTwo(v[0]);
            expect(result).toBeDefined();
            expect(result).is.not.null;
            expect(result).toEqual(v[1]);
        });
    });

    if (partTwoAnswer && testFullInput) {
        test("matches partTwo answer (if known)", () => {
            let result = partTwo(input);
            expect(result).toBeDefined();
            expect(result).is.not.null;
            expect(partTwo(input)).toEqual(partTwoAnswer);
        });
    }
});

describe("utils", () => {
    describe("getLineType", () => {
        test("identifies vertical line", () => {
            expect(
                getLineType([
                    [7, 0],
                    [7, 4],
                ])
            ).toEqual("vertical");
        });
        test("identifies horizontal line", () => {
            expect(
                getLineType([
                    [3, 8],
                    [1, 8],
                ])
            ).toEqual("horizontal");
        });
        test("ignores non-orthagonal lines", () => {
            expect(
                getLineType([
                    [2, 2],
                    [5, 5],
                ])
            ).toEqual("diagonal");
        });
    });
});

if (testFullInput) {
    console.log("partOne answer", partOne(input));
    console.log("partTwo answer", partTwo(input));
}
