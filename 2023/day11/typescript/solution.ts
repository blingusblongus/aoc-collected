type Coord = { x: number; y: number; };

export function solve(input: string, addExpanded: number) {
    let rows = input.split(/\n/g);
    const expanded = getExpanded(rows)
    const galaxies = getGalaxies(rows)

    let result = 0;

    for (let i = 0; i < galaxies.length - 1; ++i) {
        for (let j = i + 1; j < galaxies.length; ++j) {
            const a = galaxies[i];
            const b = galaxies[j];
            let distance = Math.abs(b.x - a.x) + Math.abs(b.y - a.y);
            distance += calculateExpandedDistance(a, b, expanded, addExpanded);

            result += distance;
        }
    }
    return result;
}

function calculateExpandedDistance(a: Coord, b: Coord, expanded: { rows: number[], cols: number[] }, bonusNumber: number) {
    // Calculate bonus rows/cols
    const xMin = Math.min(a.x, b.x);
    const xMax = Math.max(a.x, b.x);
    const yMin = Math.min(a.y, b.y);
    const yMax = Math.max(a.y, b.y);

    let expandedRows = 0;
    for (let row of expanded.rows) {
        if (row > yMin && row < yMax) {
            expandedRows++
        }
    }
    let expandedCols = 0;
    for (let col of expanded.cols) {
        if (col > xMin && col < xMax) {
            expandedCols++;
        }
    }

    return (expandedRows + expandedCols) * bonusNumber;
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
    return { rows: rowsToAdd, cols: colsToAdd };
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
