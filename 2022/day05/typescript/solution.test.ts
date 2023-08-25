import { partOne, partTwo } from "./solution";
import { readFileSync } from "fs";
import { expect, test } from "vitest";

const input = readFileSync(`${__dirname}/../input`).toString();

const testCrates = "NZ,DCM,P";
const testInstructions = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;
const INITIAL_BOXES =
    "WRTG,WVSMPHCG,MGSTLC,FRWMDHJ,JFWSHLQP,SMFNDJP,JSCGFDBZ,BTR,CLWNH";
const partOneAnswer = "JCMHLVGMG";
const partTwoAnswer = "LVMRWSSPZ";

test("has partOne answer", () => {
    expect(partOne(INITIAL_BOXES, input)).toBeDefined();
});

test("partOne: example ", () => {
    expect(partOne(testCrates, testInstructions)).toEqual("CMZ");
});

test("partTwo: example ", () => {
    expect(partTwo(testCrates, testInstructions)).toEqual("MCD");
});

test("has input", () => {
    expect(input.length).toBeGreaterThan(0);
    expect(input).toBeDefined();
});

if (partOneAnswer) {
    test("matches partOne answer (if known)", () => {
        expect(partOne(INITIAL_BOXES, input)).toEqual(partOneAnswer);
    });
}

if (partTwoAnswer) {
    test("matches partTwo answer (if known)", () => {
        expect(partTwo(INITIAL_BOXES, input)).toEqual(partTwoAnswer);
    });
}

console.log("partOne answer", partOne(INITIAL_BOXES, input));
console.log("partTwo answer", partTwo(INITIAL_BOXES, input));
