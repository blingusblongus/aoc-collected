import { partOne, partTwo } from "./solution";
import { readFileSync } from "fs";
import { expect, test, describe } from "vitest";

const input = readFileSync(`${__dirname}/../input`).toString();

describe("partOne", () => {
    const testInput = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`
    test("solves test case", () => {
        const result = partOne(testInput);
        expect(result).toBe(142)
    })

    test("solves actual case", () => {
        let result = partOne(input);
        expect(result).toBe(54388)
    })
})

describe("partTwo", () => {
    const testInput = `two1nine
eightwothree
abcone2threexyuz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`

    test("solves test case", () => {
        console.log('test')
        const result = partTwo(testInput);
        expect(result).toBe(281)
    })

    // test("solves actual case", () => {
    //     console.log('actual')
    //     let result = partTwo(input);
    //     console.log(result)
    //     expect(result).toBeLessThan(53519)
    // })
});

