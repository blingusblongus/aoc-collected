export class Pattern {
    private _rows: string[];
    private _width: number;
    private _height: number;

    constructor(patternStr: string) {
        this._rows = patternStr.split(/\n/g);
        this._width = this._rows[0].length ?? 0;
        this._height = this._rows.length ?? 0;
    }

    width() { return this._width };
    height() { return this._height };

    print() {
        console.log(this._rows);
    }
    symmetricOverX(axis: number): boolean {
        if (axis > this._width - 1) {
            throw Error("Out of bounds: x=" + axis)
        }

        let symmetric = true;
        for (let row of this._rows) {
            if (!this.lineSymmetric(row, axis)) {
                symmetric = false;
            };
        }
        return symmetric;
    };
    symmetricOverY(axis: number): boolean {
        if (axis > this._height - 1) {
            throw Error("Out of bounds: x=" + axis)
        }

        let symmetric = true;
        for (let i = 0; i < this._width; ++i) {
            let line = "";

            for (let j = 0; j < this._height; ++j) {
                line += this._rows[j][i];
            }

            if (!this.lineSymmetric(line, axis)) {
                symmetric = false;
                break;
            };
        }
        return symmetric;
    };

    lineSymmetric(line: string, axis: number): boolean {
        const left = line.substring(0, axis + 1).split("");
        const right = line.substring(axis - 1).split("").reverse();

        let symmetric = true;
        while (left.length > 0 && right.length > 0) {
            const a = left.pop();
            const b = right.pop();
            if (a !== b) {
                symmetric = false;
                break;
            }
        }

        return symmetric;
    }
}
export function partOne(input: string) {
    const patterns = parseInput(input);
    let result = 0;
    for (let pattern of patterns) {
        // find vertical symmetry axis
        for (let i = 1; i < pattern.width(); ++i) {
            if (pattern.symmetricOverX(i)) {
                result += i;
                // console.log("symmetric over x =", i)
                break;
            }
        }
        for (let i = 1; i < pattern.height(); ++i) {
            if (pattern.symmetricOverY(i)) {
                result += i * 100;
                // console.log("symmetric over y = ", i);
                break;
            }
        }
        // throw Error("no symmetry detected")
    }
    return result;
}

export function partTwo(input: string) {
    return null;
}

export function parseInput(input: string) {
    return input.trim().split(/\n\n/g).map(pattern => new Pattern(pattern))
}
