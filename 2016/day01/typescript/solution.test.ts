import { partOne, partTwo } from "./solution";
import { readFileSync } from "fs";
import { expect, test } from "vitest";

const input = readFileSync(`${__dirname}/../input`).toString();

test("has partOne answer", () => {
    expect(partOne(input)).toBeDefined();
});

const partOneCases = [
    ["R2, L3", 5],
    ["R2, R2, R2", 2],
    ["R5, L5, R5, R3", 12],
] as const;

partOneCases.forEach((v, i) => {
    test("partOne: case " + i, () => {
        expect(partOne(v[0])).toEqual(v[1]);
    });
});

const partTwoCases = [["R8, R4, R4, R8", 4]] as const;

partTwoCases.forEach((v, i) => {
    test("partTwo: case " + i, () => {
        expect(partTwo(v[0])).toEqual(v[1]);
    });
});

test("has input", () => {
    expect(input.length).toBeGreaterThan(0);
    expect(input).toBeDefined();
});

console.log("partOne answer", partOne(input));
console.log("partTwo answer", partTwo(input));
