import { partOne, partTwo } from "./solution";
import { readFileSync } from "fs";
import { expect, test } from "vitest";

const input = readFileSync(`${__dirname}/../input`).toString();

test("has partOne answer", () => {
  expect(partOne(input)).toBeDefined();
});

test("has partTwo answer", () => {
  expect(partOne(input)).toBeDefined();
});

test("has input", () => {
  expect(input.length).toBeGreaterThan(0);
  expect(input).toBeDefined();
});
