import { partOne, scoreCard, partOneScoring, partTwo } from "./solution";
import { readFileSync } from "fs";
import { expect, test, describe } from "vitest";

const input = readFileSync(`${__dirname}/../input`).toString();

const testInput = `
Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
`

describe("part one", () => {
    describe("utils", () => {
        test("scores sample card correctly", () => {
            const score = scoreCard("Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53")
            expect(partOneScoring(score)).toBe(8);
            expect(partOneScoring(scoreCard("Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19"))).toBe(2);
            expect(partOneScoring(scoreCard("Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11"))).toBe(0);
        })
    })
    test("solves sample", () => {
        const result = partOne(testInput);
        console.log("sample:", result)
        expect(result).toBe(13);
    })
    test("solves actual", () => {
        const result = partOne(input);
        console.log("part One:", result)
        expect(result).toBe(26346);
    })
})

describe("part two", () => {
    test("solves sample", () => {
        const result = partTwo(testInput);
        console.log(result);
        expect(result).toBe(30);
    })
    test("solves actual", () => {
        const result = partTwo(input);
        console.log("part two:", result)
        expect(result).toBe(8467762);
    })
})
