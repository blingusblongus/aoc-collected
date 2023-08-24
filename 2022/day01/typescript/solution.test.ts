import { partOne, partTwo } from "./solution";
import { readFileSync } from "fs";
import { expect, test } from "vitest";

const input = readFileSync(`${__dirname}/../input`).toString();

const testInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

test("has partOne answer", () => {
    expect(partOne(input)).toBeDefined();
});

test("satisfies partOne example", () => {
    expect(partOne(testInput)).toEqual(24000);
});

test("satisfies partTwo example", () => {
    expect(partTwo(testInput)).toEqual(45000);
});

test("has input", () => {
    expect(input.length).toBeGreaterThan(0);
    expect(input).toBeDefined();
});

console.log("partOne answer", partOne(input));
console.log("partTwo answer", partTwo(input));
