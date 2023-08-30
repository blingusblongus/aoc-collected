import { expect, test } from "vitest";
import { Board } from "./Board";

test("returns correct coordinates", () => {
    const board = new Board([
        [3, 15, 0, 2, 22],
        [9, 18, 13, 17, 5],
        [19, 8, 7, 25, 23],
        [20, 11, 10, 24, 4],
        [14, 21, 16, 12, 6],
    ]);

    expect(board.findNumCoords(18)).toEqual({ x: 1, y: 1 });
    expect(board.findNumCoords(16)).toEqual({ x: 2, y: 4 });
});
