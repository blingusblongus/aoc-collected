import { solve } from "./solution";
import { expect, test, describe } from "vitest";
import getTypescriptInput from "../../../utils/getTypescriptInput";

const input = await getTypescriptInput(__dirname);

const testInput = `...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`

describe("part one", () => {
    test("solves sample", () => {
        let result = solve(testInput, 1);
        expect(result).toBe(374)
    })

    test("solves actual", () => {
        let result = solve(input, 1);
        console.log("part one:", result)
        expect(result).toBe(10228230);
    })
})

describe("part two", () => {
    test("solves sample", () => {
        let result = solve(testInput, 9)
        expect(result).toBe(1030)
    })
    test("solves sample", () => {
        let result = solve(testInput, 99)
        expect(result).toBe(8410)
    })
    test("solves actual", () => {
        let result = solve(input, 999999)
        console.log("part two:", result)
        expect(result).toBeLessThan(447064009334102);
        expect(result).toBe(447073334102);
    })
})
