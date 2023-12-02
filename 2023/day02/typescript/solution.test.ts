import { partOne, checkGame } from "./solution";
import { readFileSync } from "fs";
import { expect, test, describe } from "vitest";

const input = readFileSync(`${__dirname}/../input`).toString();
const maximums = { red: 12, green: 13, blue: 14 }

describe("part one", () => {
    describe("checkGame", () => {
        test("returns true for valid game", () => {
            const result = checkGame("Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue", maximums);
            expect(result).toBe(true)
        })
        test("returns false for invalid game", () => {
            const result = checkGame("Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red", maximums);
            expect(result).toBe(false)
        })

    })

    test("solves sample", () => {
        const testInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`
        let result = partOne(testInput, { red: 12, green: 13, blue: 14 })
        expect(result).toBe(8)
    })

    test("solves actual", () => {
        let result = partOne(input, maximums);
        console.log("part one:", result)
        expect(result).toBe(2447)
    })
})
