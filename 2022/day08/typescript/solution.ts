type Pos = [number, number];

export function partOne(input: string) {
    let count = 0;
    let grove = parseInput(input);

    for (let y = 0; y < grove.length; y++) {
        let row = grove[y];

        for (let x = 0; x < row.length; x++) {
            const pos: Pos = [x, y];
            if (checkHoriz(row, pos)) {
                count++;
                continue;
            }
            const transposedRow = grove.map((el) => el[x]);
            if (checkHoriz(transposedRow, [y, x])) {
                count++;
                continue;
            }
        }
    }

    return count;
}

export function partTwo(input: string) {
    let scenicScore = 0;
    let grove = parseInput(input);

    for (let y = 0; y < grove.length; y++) {
        let row = grove[y];

        for (let x = 0; x < row.length; x++) {
            const pos: Pos = [x, y];
            const transposedRow = grove.map((el) => el[x]);
            let posTreeScore =
                getTreeScore(transposedRow, [y, x]) * getTreeScore(row, pos);
            if (posTreeScore > scenicScore) scenicScore = posTreeScore;
        }
    }

    return scenicScore;
}

const parseInput = (input: string): string[][] => {
    let arr = input.trim().split(/\n/g);
    return arr.map((x) => x.split(""));
};

const checkHoriz = (row: string[], coords: Pos): boolean => {
    let index = coords[0];
    let visible = true;
    let height = Number(row[index]);

    // guard edge
    if (index === 0 || index === row.length - 1) return true;

    //look left
    for (let i = index - 1; i >= 0; i--) {
        // console.log('checking left', row[i], 'vs', height);
        let otherHeight: number = Number(row[i]);
        if (otherHeight >= height) {
            visible = false;
            // console.log('blocked from left');
            break;
        }
    }
    if (visible) return true;

    //look right
    visible = true;
    for (let i = index + 1; i < row.length; i++) {
        let otherHeight: number = Number(row[i]);
        // console.log('checking right', row[i], 'vs', height);
        if (otherHeight >= height) {
            visible = false;
            // console.log('blocked from right')
            break;
        }
    }
    if (visible) return true;
    return false;
};

const getTreeScore = (row: string[], coords: Pos): number => {
    let index = coords[0];
    let visible = true;
    let height = Number(row[index]);

    let left = 0;
    let right = 0;

    // guard edge
    if (index === 0 || index === row.length - 1) return 0;

    //look left
    for (let i = index - 1; i >= 0; i--) {
        let otherHeight: number = Number(row[i]);
        if (otherHeight >= height) {
            // Blocked from left
            visible = false;
            left++;
            break;
        }
        left++;
    }

    //look right
    visible = true;
    for (let i = index + 1; i < row.length; i++) {
        let otherHeight: number = Number(row[i]);
        if (otherHeight >= height) {
            // blocked from right
            visible = false;
            right++;
            break;
        }
        right++;
    }

    return left * right;
};
