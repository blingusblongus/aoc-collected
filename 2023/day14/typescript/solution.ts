import { createWriteStream } from 'fs';

export function partOne(input: string) {
    const platform = parseInput(input);
    const rotated = rotateLeft(platform);
    let result = 0;
    // printGrid(rotated)

    for (let y = 0; y < rotated.length; ++y) {
        let start = 0;
        for (let x = 0; x <= rotated[0].length; ++x) {
            if (rotated[y][x] === "#" || x === rotated[y].length) {
                sortRange(rotated[y], start, x);

                start = x + 1;
                continue;
            }
        }
    }
    // printGrid(rotated)

    for (let row of rotated) {
        for (let x = 0; x < row.length; ++x) {
            if (row[x] == "O") {
                result += row.length - x;
            }
        }
    }

    return result;
}

function printGrid(grid: string[][]) {
    const path = '2023/day14/typescript/log.txt';
    const logStream = createWriteStream(path, { flags: 'w' });
    logStream.end();
    const appendStream = createWriteStream(path, { flags: 'a' })
    for (let y = 0; y < grid.length; ++y) {
        let line = "";
        for (let x = 0; x < grid[0].length; ++x) {
            line += grid[y][x];
        }
        // console.log(line)
        appendStream.write("\n" + line);
    }

}

export function sortRange(row: string[], start: number, end: number) {
    let values: string[] = [];

    for (let i = start; i < end; ++i) {
        values.push(row[i]);
    }

    values = values.sort().reverse();

    let idx = 0;
    for (let val of values) {
        row[idx + start] = val;
        idx++;
    }
    return row;
}

function parseInput(input: string): string[][] {
    return input.trim().split(/\n/g).map(row => row.split(""))
}

function rotateLeft(grid: string[][]): string[][] {
    const rows = grid.length;
    const cols = grid[0].length || 0;

    const rotated = new Array(cols);
    for (let y = 0; y < rows; ++y) {
        rotated[y] = new Array(cols);
    }

    for (let y = 0; y < rows; ++y) {
        for (let x = 0; x < cols; ++x) {
            rotated[cols - 1 - x][y] = grid[y][x]
        }
    }
    return rotated;
}

