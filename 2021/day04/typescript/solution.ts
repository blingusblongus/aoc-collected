import { Board } from "./Board";
export type Coords = { x: number; y: number };

export function partOne(input: string) {
    const { nums, boards } = parseInput(input.trim());
    const picked = nums.splice(0, 4);

    while (nums.length > 0) {
        let pickedNum = nums.shift();
        picked.push(pickedNum!);

        for (let board of boards) {
            const coords: Coords | null = board.findNumCoords(
                picked[picked.length - 1]
            );
            if (!coords) continue;
            if (board.checkForWin(coords, picked)) {
                return board.calculateResult(picked);
            }
        }
    }
    throw Error("No winning board found");
}

export function partTwo(input: string) {
    const { nums, boards } = parseInput(input.trim());
    const picked = nums.splice(0, 4);

    while (nums.length > 0 && boards.length > 0) {
        let pickedNum = nums.shift();

        picked.push(pickedNum!);

        // reverse iteration so we can splice out boards without an extra loop
        for (let i = boards.length - 1; i >= 0; --i) {
            let board = boards[i];
            const coords: Coords | null = board.findNumCoords(
                picked[picked.length - 1]
            );
            if (!coords) continue;
            if (board.checkForWin(coords, picked)) {
                if (boards.length === 1) {
                    return board.calculateResult(picked);
                }

                boards.splice(i, 1);
            }
        }
    }
    throw Error("No winning board found");
}

function parseInput(input: string) {
    let nums: number[] = [];
    let boards: Board[] = [];
    try {
        const elements = input.split(/\s*\n\s*\n\s*/g);
        nums =
            elements
                .shift()
                ?.split(",")
                .map((x) => parseInt(x)) ?? [];
        boards = elements.map(
            (x) =>
                new Board(
                    x
                        .split(/\s*\n\s*/g)
                        .map((y) => y.split(/\s+/g).map((z) => parseInt(z)))
                )
        );
    } catch (error) {
        console.error("Error parsing input:", error);
    }
    return { nums, boards };
}
