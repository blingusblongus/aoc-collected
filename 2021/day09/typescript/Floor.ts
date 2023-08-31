import { Coords } from "./solution";

export class Floor {
    private grid: number[][];
    public readonly height: number;
    public readonly width: number;

    constructor(grid: number[][]) {
        this.grid = grid;
        this.height = grid.length;
        this.width = grid[0].length;
    }

    getNeighbors({ x, y }: Coords): Coords[] {
        return [
            { x: x + 1, y },
            { x: x - 1, y },
            { x, y: y + 1 },
            { x, y: y - 1 },
        ];
    }

    isLowestPoint({ x, y }: Coords) {
        const neighbors: Coords[] = this.getNeighbors({ x, y });

        for (let neighbor of neighbors) {
            if (!this.isValidPoint(neighbor)) continue;

            if (this.grid[neighbor.y][neighbor.x] <= this.grid[y][x])
                return false;
        }
        return true;
    }

    isValidPoint({ x, y }: Coords) {
        return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }

    getPointHeight({ x, y }: Coords) {
        if (this.grid[y][x] === undefined)
            throw Error(`Invalid point specified: ${{ x, y }}`);
        return this.grid[y][x];
    }

    findBasin(point: Coords, acc?: Set<string>) {
        if (!acc) acc = new Set<string>();

        let val = this.grid[point.y][point.x];
        if (val === 9) return;

        if (acc.has(JSON.stringify(point))) return;

        acc.add(JSON.stringify(point));
        let neighbors = this.getNeighbors(point);

        for (let neighbor of neighbors) {
            if (!this.isValidPoint(neighbor)) continue;
            if (acc.has(JSON.stringify(neighbor))) continue;
            this.findBasin(neighbor, acc);
        }
        return acc;
    }
}
