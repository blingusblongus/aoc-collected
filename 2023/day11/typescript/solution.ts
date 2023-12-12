type Coord = { x: number; y: number; };

export function partOne(input: string) {
    let rows = input.split(/\n/g);

    const expanded = expandUniverse(rows);
    const galaxies = getGalaxies(expanded);

    let result = 0;
    let count = 0;

    for (let i = 0; i < galaxies.length; ++i) {
        for (let j = i + 1; j < galaxies.length; ++j) {
            count++;
            const a = galaxies[i];
            const b = galaxies[j];
            const distance = Math.abs(b.x - a.x) + Math.abs(b.y - a.y);

            result += distance;
        }
    }
    return result;
}

function getExpanded(rows: string[]) {
    let rowsToAdd: number[] = [];
    for (let i = 0; i < rows.length; ++i) {
        let row = rows[i];
        let containsGalaxy = false;
        for (let letter of row) {
            if (letter === "#") {
                containsGalaxy = true;
                break;
            }
        }

        if (!containsGalaxy) {
            rowsToAdd.push(i)
        }
    }
}

function getGalaxies(rows: string[]) {
    let result: Coord[] = [];

    for (let y = 0; y < rows.length; ++y) {
        for (let x = 0; x < rows[y].length; ++x) {
            if (rows[y][x] === "#") {
                result.push({ x, y });
            }
        }
    }
    return result;
}

export function expandUniverse(rows: string[]) {
    // Find horizontal expansions
    let rowsToAdd: number[] = [];
    for (let i = 0; i < rows.length; ++i) {
        let row = rows[i];
        let containsGalaxy = false;
        for (let letter of row) {
            if (letter === "#") {
                containsGalaxy = true;
                break;
            }
        }

        if (!containsGalaxy) {
            rowsToAdd.push(i)
        }
    }

    // Determine horizonal expansions
    let emptyRow = ".".repeat(rows[0].length)
    for (let i = rowsToAdd.length - 1; i > -1; --i) {
        rows.splice(rowsToAdd[i], 0, emptyRow)
    }

    let colsToAdd: number[] = [];
    for (let i = 0; i < rows[0].length; ++i) {
        let columnGalaxy = false;
        for (let j = 0; j < rows.length; ++j) {
            let letter = rows[j][i];
            if (letter === "#") {
                columnGalaxy = true;
                break;
            }
        }
        if (!columnGalaxy) {
            colsToAdd.push(i);
        }
    }

    // Insert Horizontal expansions
    for (let i = 0; i < rows.length; ++i) {
        for (let j = colsToAdd.length - 1; j > -1; --j) {
            rows[i] = rows[i].substring(0, colsToAdd[j]) + '.' + rows[i].substring(colsToAdd[j])
        }
    }


    return rows;
}

