import { getWinningRange, partOne } from "./solution";
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

// describe("part two", () => {
//     describe("getGameMinimums", () => {
//         test("returns mins for game 1", () => {
//             const mins = getGameMinimums("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green")
//             expect(mins).toStrictEqual({ red: 4, green: 2, blue: 6 })
//         })
//         test("returns mins for game 2", () => {
//             const mins = getGameMinimums("Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue")
//             expect(mins).toStrictEqual({ red: 1, green: 3, blue: 4 })
//         })
//     })
//     test("solves sample", () => {
//         let result = partTwo(testInput)
//         expect(result).toBe(2286)
//     })
//     test("solves actual", () => {
//         let result = partTwo(input)
//         console.log("part two:", result)
//         expect(result).toBeGreaterThan(2286)
//         expect(result).toBe(56322)
//     })
// })
