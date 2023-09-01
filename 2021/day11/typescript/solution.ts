type Point = { x: number; y: number };
export class Cavern {
    private _grid: number[][];
    public readonly width: number;
    public readonly height: number;
    private _flashes: number = 0;

    constructor(input: string) {
        this._grid = this.parseInput(input);
        this.height = this._grid.length;
        this.width = this._grid[0].length;
    }

    get flashes() {
        return this._flashes;
    }

    public simulate(steps: number) {
        for (let i = 0; i < steps; ++i) {
            this.step();
        }
        return this;
    }

    public toString() {
        return this._grid.map((row) => row.join("")).join("\n");
    }

    public getNeighbors({ x, y }: Point) {
        const result: Point[] = [];

        for (let i = -1; i <= 1; ++i) {
            const newX = x + i;
            if (newX < 0 || newX >= this.width) continue;
            for (let j = -1; j <= 1; ++j) {
                const newY = y + j;
                if (newX === x && newY === y) continue;
                if (newY < 0 || newY >= this.height) continue;
                result.push({ x: newX, y: newY });
            }
        }

        return result;
    }

    private parseInput(input: string) {
        return input
            .trim()
            .split(/\s*\n/g)
            .map((row) =>
                row
                    .trim()
                    .split("")
                    .map((octopus) => parseInt(octopus))
            );
    }

    public getOctopusValue({ x, y }: Point) {
        return this._grid[y][x];
    }

    public syncsAt() {
        let step = 0;
        let synced = this.isSynced();

        while (!synced) {
            this.step();
            step++;
            synced = this.isSynced();
        }

        return step;
    }

    private isSynced() {
        for (let y = 0; y < this.height; ++y) {
            for (let x = 0; x < this.width; ++x) {
                if (this._grid[y][x] !== 0) return false;
            }
        }
        return true;
    }

    private step() {
        for (let y = 0; y < this.height; ++y) {
            for (let x = 0; x < this.width; ++x) {
                this._grid[y][x] += 1;
            }
        }

        const flashes: Point[] = [];
        for (let y = 0; y < this.height; ++y) {
            for (let x = 0; x < this.width; ++x) {
                let val = this.getOctopusValue({ x, y });
                if (val > 9) {
                    flashes.push({ x, y });
                }
            }
        }

        for (let point of flashes) {
            this.flash(point);
        }
        for (let y = 0; y < this.height; ++y) {
            for (let x = 0; x < this.width; ++x) {
                let val = this.getOctopusValue({ x, y });
                if (val > 9) {
                    this._grid[y][x] = 0;
                }
            }
        }

        return this;
    }

    private flash(point: Point) {
        this._flashes += 1;

        let neighbors = this.getNeighbors(point);

        for (let neighbor of neighbors) {
            if (this.getOctopusValue(neighbor) > 9) continue;
            this._grid[neighbor.y][neighbor.x] += 1;
            if (this.getOctopusValue(neighbor) > 9) {
                this.flash(neighbor);
            }
        }
    }
}

export function partOne(input: string) {
    const cavern = new Cavern(input);
    return cavern.simulate(100).flashes;
}

export function partTwo(input: string) {
    const cavern = new Cavern(input);
    return cavern.syncsAt();
}
