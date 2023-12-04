import { partOne, partTwo, isSymbol } from "./solution";
import { readFileSync } from "fs";
import { expect, test, describe } from "vitest";

const input = readFileSync(`${__dirname}/../input`).toString();

const testInput = `
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
`

describe("utils", () => {
    describe("isSymbol", () => {
        test("detects symbol", () => {
            expect(isSymbol("#")).toBe(true)
            expect(isSymbol("/")).toBe(true)
            expect(isSymbol("*")).toBe(true)
            expect(isSymbol("$")).toBe(true)
        })
        test("returns false for number", () => {
            expect(isSymbol("3")).toBe(false)
        })
        test("returns false for period", () => {
            expect(isSymbol(".")).toBe(false)
        })
    })
})
describe("part one", () => {
    test("solves sample", () => {
        const result = partOne(testInput);
        expect(result).toBe(4361);
    })
    test("solves actual", () => {
        const result = partOne(input);
        console.log("part One:", result)
        expect(result).toBeLessThan(540592);
        expect(result).toBe(539590)
    })
})

describe("part two", () => {
    test("solves sample", () => {
        const result = partTwo(testInput);
        console.log("part two sample:", result)
        expect(result).toBe(467835)
    })
    test("solves sample", () => {
        const result = partTwo(input);
        console.log("part two actual:", result)
        expect(result).toBe(80703636)
    })
})
