import { Coords } from "./solution";

export class Board {
    private readonly rows: number[][];

    constructor(rows: number[][]) {
        this.rows = rows;
    }

    findNumCoords(n: number): Coords | null {
        for (let y = 0; y < this.rows.length; ++y) {
            for (let x = 0; x < this.rows[y].length; ++x) {
                if (this.rows[y][x] === n) {
                    return { x, y };
                }
            }
        }
        return null;
    }

    checkForWin(coords: Coords, picked: number[]) {
        let horizWin = true;
        let vertWin = true;

        for (let n of this.rows[coords.y]) {
            if (!picked.includes(n)) {
                horizWin = false;
                break;
            }
        }

        for (let i = 0; i < this.rows.length; ++i) {
            if (!picked.includes(this.rows[i][coords.x])) {
                vertWin = false;
                break;
            }
        }

        return vertWin || horizWin;
    }

    calculateResult(picked: number[]) {
        const flat = this.rows.flat();
        const boardSum = flat.reduce((sum, n) => {
            if (!picked.includes(n)) {
                return sum + n;
            }
            return sum;
        }, 0);

        return boardSum * picked[picked.length - 1];
    }
}
