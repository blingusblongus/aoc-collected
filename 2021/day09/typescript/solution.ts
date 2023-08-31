import { Floor } from "./Floor";

export type Coords = { x: number; y: number };

export function partOne(input: string) {
    const floor = new Floor(inputToArr(input));

    let lowestPoints: Coords[] = [];

    for (let y = 0; y < floor.height; ++y) {
        for (let x = 0; x < floor.width; ++x) {
            if (floor.isLowestPoint({ x, y })) {
                lowestPoints.push({ x, y });
            }
        }
    }

    return lowestPoints.reduce(
        (sum, point) => (sum += floor.getPointHeight(point) + 1),
        0
    );
}

export function partTwo(input: string) {
    const floor = new Floor(inputToArr(input));

    let lowestPoints: Coords[] = [];

    for (let y = 0; y < floor.height; ++y) {
        for (let x = 0; x < floor.width; ++x) {
            if (floor.isLowestPoint({ x, y })) {
                lowestPoints.push({ x, y });
            }
        }
    }

    const basinSizes = lowestPoints.map(
        (point) => floor.findBasin(point)?.size || 0
    );
    return calculateBasinScores(basinSizes, 3);
}

function calculateBasinScores(basinSizes: number[], take: number) {
    if (basinSizes.length < 1) throw Error("No basins provided");

    const arr = basinSizes.slice().sort((a, b) => b - a);
    let result = 1;
    for (let i = 0; i < take; ++i) {
        result *= arr[i];
    }

    return result;
}

function inputToArr(input: string) {
    return input
        .trim()
        .split(/\s*\n/g)
        .map((row) =>
            row
                .trim()
                .split("")
                .map((point) => +point)
        );
}
