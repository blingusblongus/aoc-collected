type Coords = { x: number; y: number };
class Floor {
    private grid: number[][];
    public readonly height: number;
    public readonly width: number;

    constructor(grid: number[][]) {
        this.grid = grid;
        this.height = grid.length;
        this.width = grid[0].length;
    }

    isLowestPoint({ x, y }: Coords) {
        const neighbors: Coords[] = [
            { x: x + 1, y },
            { x: x - 1, y },
            { x, y: y + 1 },
            { x, y: y - 1 },
        ];

        for (let neighbor of neighbors) {
            if (neighbor.x < 0 || neighbor.x >= this.grid[0].length) continue;
            if (neighbor.y < 0 || neighbor.y >= this.grid.length) continue;

            if (this.grid[neighbor.y][neighbor.x] <= this.grid[y][x])
                return false;
        }
        return true;
    }

    getPointHeight({ x, y }: Coords) {
        if (this.grid[y][x] === undefined)
            throw Error(`Invalid point specified: ${{ x, y }}`);
        return this.grid[y][x];
    }
}

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
    return null;
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
