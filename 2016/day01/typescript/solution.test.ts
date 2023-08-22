import { partOne } from "./solution";
import { readFileSync } from "fs";

const input = readFileSync(`${__dirname}/../input`).toString();

test("has answer", () => {
  expect(partOne(input)).toBeDefined();
});
