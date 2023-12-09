import { partOne, partTwo } from "./solution";
import { expect, test, describe } from "vitest";
import getTypescriptInput from "../../../utils/getTypescriptInput";

const input = await getTypescriptInput(__dirname);

const testInput = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`

describe("part one", () => {
    test("solves sample", () => {
        let result = partOne(testInput);
        expect(result).toBe(114)
    })

    test("solves actual", () => {
        let result = partOne(input);
        console.log("part one:", result)
        expect(result).toBe(2005352194);
    })
})

describe("part two", () => {
    test("solves sample", () => {
        let result = partTwo(testInput)
        expect(result).toBe(2)
    })
    test("solves actual", () => {
        let result = partTwo(input)
        console.log("part two:", result)
        expect(result).toBe(1077);
    })
})
