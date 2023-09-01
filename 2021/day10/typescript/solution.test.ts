import { partOne, partTwo } from "./solution";
import { readFileSync } from "fs";
import { expect, test, describe } from "vitest";

const input = readFileSync(`${__dirname}/../input`).toString();

const testInput = `[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`;

const useFullInput = true;
const partOneCases = [
    ["{([(<{}[<>[]}>{[]{[(<()>", 1197],
    ["[[<[([]))<([[{}[[()]]]", 3],
    ["[{[{({}]{}}([{[{{{}}([]", 57],
    ["[<(<(<(<{}))><([]([]()", 3],
    ["<{([([[(<>()){}]>(<<{{", 25137],
    [testInput, 26397],
] as const;
const partOneAnswer = null;
const partTwoCases = [] as const;
const partTwoAnswer = null;

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
