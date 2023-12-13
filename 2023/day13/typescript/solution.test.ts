import { partOne, partTwo, parseInput, Pattern } from "./solution";
import { expect, test, describe } from "vitest";
import getTypescriptInput from "../../../utils/getTypescriptInput";

const input = await getTypescriptInput(__dirname);

const testInput = `#.##..##.
..#.##.#.
##......#
##......#
..#.##.#.
..##..##.
#.#.##.#.

#...##..#
#....#..#
..##..###
#####.##.
#####.##.
..##..###
#....#..#`

describe("part one", () => {
    test("solves sample", () => {
        let result = partOne(testInput);
        expect(result).toBe(405)
    })

    describe("parseInput", () => {
        test("returns two patterns from sample", () => {
            expect(parseInput(testInput).length).toBe(2);
        })
    })

    describe("Pattern", () => {
        const [pattern, pattern2] = parseInput(testInput);
        test("line: horiz symmetry", () => {
            expect(pattern.lineSymmetric("#.##..##.", 5)).toBe(true);
            expect(pattern.lineSymmetric("#.##..##.", 3)).toBe(false);
        })
        test("overall: horiz symmetry", () => {
            expect(pattern.symmetricOverX(5)).toBe(true);
            expect(pattern.symmetricOverX(3)).toBe(false);
        })
        test("overall: vert symmetry", () => {
            expect(pattern2.symmetricOverY(4)).toBe(true);
            expect(pattern2.symmetricOverY(3)).toBe(false);
        })
    })

    test("solves actual", () => {
        let result = partOne(input);
        console.log("part one:", result)
        expect(result).toBe(32723);
    })
})

// describe("part two", () => {
//     test("solves sample", () => {
//         let result = partTwo(testInput)
//         expect(result).toBe(5905)
//     })
//     test("solves actual", () => {
//         let result = partTwo(input)
//         console.log("part two:", result)
//         expect(result).toBeLessThan(253926070);
//         expect(result).toBe(253630098);
//     })
// })
