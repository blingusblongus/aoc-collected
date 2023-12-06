import { getWinningRange, partOne, partTwo } from "./solution";
import { readFileSync } from "fs";
import { expect, test, describe } from "vitest";

const input = readFileSync(`${__dirname}/../input`).toString();

const testInput = `Time:      7  15   30
Distance:  9  40  200`

describe("part one", () => {
    describe("getWinningPresses", () => {
        test("result length fits", () => {
            expect(getWinningRange(7, 9).length).toBe(4)
        })
    })
    test("solves sample", () => {
        let result = partOne(testInput);
        expect(result).toBe(288)
    })

    test("solves actual", () => {
        let result = partOne(input);
        console.log("part one:", result)
        expect(result).toBe(32076);
    })
})

describe("part two", () => {
    test("solves sample", () => {
        let result = partTwo(testInput)
        expect(result).toBe(71503)
    })
    test("solves actual", () => {
        let result = partTwo(input)
        console.log("part two:", result)
        expect(result).toBe(34278221);
    })
})
