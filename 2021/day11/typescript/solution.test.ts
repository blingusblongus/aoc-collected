import { Cavern, partOne, partTwo } from "./solution";
import { readFileSync } from "fs";
import { expect, test, describe } from "vitest";

const input = readFileSync(`${__dirname}/../input`).toString();

const useFullInput = true;
const partOneCases = [] as const;
const partOneAnswer = 1688;
const partTwoCases = [] as const;
const partTwoAnswer = 403;

describe("solution folder", () => {
    test("has input", () => {
        expect(input.length).toBeGreaterThan(0);
        expect(input).toBeDefined();
    });
});

describe("cavern class", () => {
    const cavern = new Cavern(`11111
19991
19191
19991
11111`);
    test("gets all neighbors", () => {
        expect(cavern.getNeighbors({ x: 1, y: 1 })).toEqual([
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 1, y: 0 },
            { x: 1, y: 2 },
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 2, y: 2 },
        ]);
    });

    test("gets partial neighbors on edge", () => {
        expect(cavern.getNeighbors({ x: 4, y: 0 })).toEqual([
            { x: 3, y: 0 },
            { x: 3, y: 1 },
            { x: 4, y: 1 },
        ]);
    });

    describe("matches first example", () => {
        const cavern = new Cavern(`11111
19991
19191
19991
11111`);
        test("simulates one step:", () => {
            expect(cavern.simulate(1).toString()).toEqual(`34543
40004
50005
40004
34543`);
        });

        test("simulates two steps:", () => {
            expect(cavern.simulate(1).toString()).toEqual(`45654
51115
61116
51115
45654`);
        });
    });

    describe("matches second (larger) example", () => {
        const largeCavern = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;
        test("simulates 1 steps", () => {
            const cavern = new Cavern(largeCavern);
            expect(cavern.simulate(1).toString()).toEqual(`6594254334
3856965822
6375667284
7252447257
7468496589
5278635756
3287952832
7993992245
5957959665
6394862637`);
        });
        test("simulates 2 steps", () => {
            const cavern = new Cavern(largeCavern);
            expect(cavern.simulate(2).toString()).toEqual(`8807476555
5089087054
8597889608
8485769600
8700908800
6600088989
6800005943
0000007456
9000000876
8700006848`);
        });
        test("counts flashes after 10 steps", () => {
            const cavern = new Cavern(largeCavern);
            expect(cavern.simulate(10).flashes).toEqual(204);
        });
        test("counts flashes after 100 steps", () => {
            const cavern = new Cavern(largeCavern);
            expect(cavern.simulate(100).flashes).toEqual(1656);
        });
        test("finds syncronization step", () => {
            const cavern = new Cavern(largeCavern);
            expect(cavern.syncsAt()).toEqual(195);
        });
    });
});

describe("partOne", () => {
    partOneCases.forEach((v, i) => {
        test("fulfills case " + i, () => {
            let result = partOne(v[0]);
            expect(result).toBeDefined();
            expect(result).is.not.null;
            expect(result).toEqual(v[1]);
        });
    });

    if (partOneAnswer && useFullInput) {
        test("matches partOne answer (if known)", () => {
            let result = partOne(input);
            expect(result).toBeDefined();
            expect(result).is.not.null;
            expect(result).toEqual(partOneAnswer);
        });
    }
});

describe("partTwo", () => {
    partTwoCases.forEach((v, i) => {
        test("fulfills case " + i, () => {
            let result = partTwo(v[0]);
            expect(result).toBeDefined();
            expect(result).is.not.null;
            expect(result).toEqual(v[1]);
        });
    });

    if (partTwoAnswer && useFullInput) {
        test("matches partTwo answer (if known)", () => {
            let result = partTwo(input);
            expect(result).toBeDefined();
            expect(result).is.not.null;
            expect(partTwo(input)).toEqual(partTwoAnswer);
        });
    }
});

if (useFullInput) {
    console.log("partOne answer", partOne(input));
    console.log("partTwo answer", partTwo(input));
}
