import { partOne, sortRange } from "./solution";
import { expect, test, describe } from "vitest";
import getTypescriptInput from "../../../utils/getTypescriptInput";

const input = await getTypescriptInput(__dirname);

const testInput = `O....#....
O.OO#....#
.....##...
OO.#O....O
.O.....O#.
O.#..O.#.#
..O..#O..O
.......O..
#....###..
#OO..#....`

describe("part one", () => {
    describe("sortRange", () => {
        test("works for sample", () => {
            const row = [".", "0", ".", "#"];
            sortRange(row, 0, 3);
            expect(row).toEqual(["0", ".", ".", "#"])
        })

    })
    test("solves sample", () => {
        let result = partOne(testInput);
        expect(result).toBe(136)
    })

    test("solves actual", () => {
        let result = partOne(input);
        console.log("part one:", result)
        expect(result).toBeLessThan(107057);
    })
})

// describe("part two", () => {
//     test("solves sample", () => {
//         let result = partTwo(testInput)
//         expect(result).toBe(145)
//     })
//     test("solves actual", () => {
//         let result = partTwo(input)
//         console.log("part two:", result)
//         expect(result).toBe(252782);
//     })
// })
