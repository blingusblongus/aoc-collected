type Dir = [string, number];

export function partOne(input: string) {
    const files = getFileSystem(inputTo2dArr(input));

    const sizeMap = getDirSizes(files);

    return sizeMap[1]
        .filter((x) => x[1] <= 100000)
        .reduce((sum, el) => (sum += el[1]), 0);
}

export function partTwo(input: string) {
    const totalSpace = 70000000;
    const files = getFileSystem(inputTo2dArr(input));

    const sizeMap = getDirSizes(files);
    const freeSpace = totalSpace - sizeMap[0];
    const spaceNeeded = 30000000 - freeSpace;

    sizeMap[1].sort((a, b) => a[1] - b[1]);

    for (let dir of sizeMap[1]) {
        if (dir[1] > spaceNeeded) return dir[1];
    }
    return -1;
}

const inputTo2dArr = (input: string): string[][] => {
    let arr = input.trim().split(/\n/g);
    return arr.map((x) => x.split(/\s/g));
};

const getFileSystem = (lines: string[][], files = {}) => {
    let fileMap = {};
    let currDir = fileMap;

    const path: string[] = [];

    try {
        for (let line of lines) {
            if (line[0] === "$") {
                //commands
                if (line[1] === "cd") {
                    if (line[2] === "/") {
                        currDir = fileMap;
                        path.push("/");
                    } else if (line[2] === "..") {
                        // follow path to up one level
                        path.pop();
                        path.forEach((loc) =>
                            loc === "/"
                                ? (currDir = fileMap)
                                : (currDir = currDir[loc])
                        );
                    } else {
                        currDir = currDir[line[2]];
                        path.push(line[2]);
                    }
                }
            } else if (line[0] === "dir") {
                // directories
                currDir[line[1]] = {};
            } else {
                currDir[line[1]] = Number(line[0]);
            }
        }
    } catch (err) {
        console.log(err);
    }

    return fileMap;
};

const getDirSizes = (
    dir: Object,
    dirs: Dir[] = [],
    loc = "/"
): [number, Dir[]] => {
    let sum = 0;
    for (let item in dir) {
        if (typeof dir[item] === "object") {
            sum += getDirSizes(dir[item], dirs, item)[0];
        } else {
            sum += dir[item];
        }
    }
    // console.log(`sum at ${loc}:`, sum);
    dirs.push([loc, sum]);
    return [sum, dirs];
};
