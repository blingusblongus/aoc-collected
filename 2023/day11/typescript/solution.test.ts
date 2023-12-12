import { partOne, expandUniverse } from "./solution";
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
        let result = partOne(testInput);
        expect(result).toBe(374)
    })

    test("expands universe", () => {
        let before = [
            '...#......', '.......#..',
            '#.........', '..........',
            '......#...', '.#........',
            '.........#', '..........',
            '.......#..', '#...#.....'
        ];

        let after = `....#........
.........#...
#............
.............
.............
........#....
.#...........
............#
.............
.............
.........#...
#....#.......`.split(/\n/g);

        expect(expandUniverse(before)).toStrictEqual(after)

    })

    test("solves actual", () => {
        let result = partOne(input);
        console.log("part one:", result)
        expect(result).toBe(10228230);
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
