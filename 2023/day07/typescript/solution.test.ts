import { partOne, partTwo, handType, Type, handType2, sortHands2 } from "./solution";
import { expect, test, describe } from "vitest";
import getTypescriptInput from "../../../utils/getTypescriptInput";

const input = await getTypescriptInput(__dirname);

const testInput = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`

describe("part one", () => {
    describe("identifies hand type", () => {
        test("five of a kind", () => {
            expect(handType("AAAAA")).toBe(Type.FiveOfAKind)
        })
        test("four of a kind", () => {
            expect(handType("3AAAA")).toBe(Type.FourOfAKind)
        })
        test("three of a kind", () => {
            expect(handType("3AAA2")).toBe(Type.ThreeOfAKind)
        })
        test("two pair", () => {
            expect(handType("33A22")).toBe(Type.TwoPair)
        })
        test("pair", () => {
            expect(handType("34A22")).toBe(Type.OnePair)
        })
        test("full house", () => {
            expect(handType("33222")).toBe(Type.FullHouse)
        })
        test("high card", () => {
            expect(handType("362KA")).toBe(Type.HighCard)
        })
    })
    test("solves sample", () => {
        let result = partOne(testInput);
        expect(result).toBe(6440)
    })

    test("solves actual", () => {
        let result = partOne(input);
        console.log("part one:", result)
        expect(result).toBe(253603890);
    })
})

describe("part two", () => {
    describe("sortHands2", () => {
        test("sorts J's correctly", () => {
            const hands = [
                { raw: "JKKK2", type: handType2("JKKK2"), bid: 1 },
                { raw: "QQQQ2", type: handType2("QQQQ2"), bid: 1 },
            ]
            expect(hands.sort(sortHands2)).toStrictEqual([
                { raw: "JKKK2", type: handType2("JKKK2"), bid: 1 },
                { raw: "QQQQ2", type: handType2("QQQQ2"), bid: 1 },
            ])
            expect(hands.reverse().sort(sortHands2)).toStrictEqual([
                { raw: "JKKK2", type: handType2("JKKK2"), bid: 1 },
                { raw: "QQQQ2", type: handType2("QQQQ2"), bid: 1 },
            ])
        })
    })
    test("solves sample", () => {
        let result = partTwo(testInput)
        expect(result).toBe(5905)
    })
    test("solves actual", () => {
        let result = partTwo(input)
        console.log("part two:", result)
        expect(result).toBeLessThan(253926070);
        expect(result).toBe(253630098);
    })
})
