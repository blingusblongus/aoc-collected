import { partOne, partTwo } from "./solution";
import { readFileSync } from "fs";
import { expect, test } from "vitest";
import { Board } from "./Board";

const input = readFileSync(`${__dirname}/../input`).toString();

test("has input", () => {
    expect(input.length).toBeGreaterThan(0);
    expect(input).toBeDefined();
});

const testInput = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`;

const partOneCases = [[testInput, 4512]] as const;
const partOneAnswer = 10680;
const partTwoCases = [] as const;
const partTwoAnswer = 31892;
const testsOnly = true;

// Part One
partOneCases.forEach((v, i) => {
    test("partOne: case " + i, () => {
        expect(partOne(v[0])).toBeDefined();
        expect(partOne(v[0])).is.not.null;
        expect(partOne(v[0])).toEqual(v[1]);
    });
});

if (partOneAnswer && !testsOnly) {
    test("matches partOne answer (if known)", () => {
        expect(partOne(input)).toBeDefined();
        expect(partOne(input)).is.not.null;
        expect(partOne(input)).toEqual(partOneAnswer);
    });
}

// Part Two
// partTwoCases.forEach((v, i) => {
//     test("partTwo: case " + i, () => {
//         expect(partTwo(v[0])).toBeDefined();
//         expect(partTwo(v[0])).is.not.null;
//         expect(partTwo(v[0])).toEqual(v[1]);
//     });
// });

if (partTwoAnswer && !testsOnly) {
    test("matches partTwo answer (if known)", () => {
        expect(partTwo(input)).toBeDefined();
        expect(partTwo(input)).is.not.null;
        expect(partTwo(input)).toEqual(partTwoAnswer);
    });
}

if (!testsOnly) {
    console.log("partOne answer", partOne(input));
    console.log("partTwo answer", partTwo(input));
}
