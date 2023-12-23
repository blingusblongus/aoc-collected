import { hashString, partOne, partTwo } from "./solution";
import { expect, test, describe } from "vitest";
import getTypescriptInput from "../../../utils/getTypescriptInput";

const input = await getTypescriptInput(__dirname);

const testInput = `rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7`

describe("part one", () => {

    describe("hashString", () => {
        const testStrings: Array<[string, number]> = [['rn=1', 30]];
        for (let s of testStrings) {
            test("correctly hashes " + s[0], () => {
                expect(hashString(s[0])).toBe(s[1]);

            })

        }
    })
    test("solves sample", () => {
        let result = partOne(testInput);
        expect(result).toBe(1320)
    })

    test("solves actual", () => {
        let result = partOne(input);
        console.log("part one:", result)
        expect(result).toBe(521341);
    })
})

describe("part two", () => {
    test("solves sample", () => {
        let result = partTwo(testInput)
        expect(result).toBe(145)
    })
    test("solves actual", () => {
        let result = partTwo(input)
        console.log("part two:", result)
        expect(result).toBe(252782);
    })
})
