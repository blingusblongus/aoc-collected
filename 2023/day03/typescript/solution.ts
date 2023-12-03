export function partOne(input: string) {
    let num_re = /\d+/g
    const lines = input.trim().split(/\n\s*/)
    let sum = 0;

    for (let i = 0; i < lines.length; ++i) {
        const line = lines[i];

        let match: RegExpExecArray | null;
        while ((match = num_re.exec(line)) !== null) {
            const num = match[0];
            const index = match.index
            const length = num.length;
            let symbolFound = false;

            // Check perimeter for symbol
            for (let j = index - 1; j < index + length + 1; j++) {
                if (i > 0 && isSymbol(lines[i - 1][j])) {
                    symbolFound = true;
                    break;
                }
                if (i + 1 < lines.length && isSymbol(lines[i + 1][j])) {
                    symbolFound = true;
                    break;
                }
            }
            if (!symbolFound && index > 0 && isSymbol(lines[i][index - 1])) {
                symbolFound = true;
            }
            if (!symbolFound && index + length < lines[i].length && isSymbol(lines[i][index + length])) {
                symbolFound = true;
            }

            if (symbolFound) {
                sum += parseInt(num);
                continue
            };
            // console.log('invalid number', num)
        }
    }
    return sum
}

export function isSymbol(char: string) {
    if (!char) return false;
    return /[^.\d]/.test(char)

}


type Coords = { x: number, y: number };
export function partTwo(input: string) {
    const lines = input.trim().split(/\n\s*/)
    let result = 0;

    for (let i = 0; i < lines.length; ++i) {
        const line = lines[i];

        // Find *
        for (let j = 0; j < lines[0].length; ++j) {
            if (line[j] === "*") {
                let searched: Coords[] = []
                let numsFound: string[] = [];
                console.log("found at ", j, i)

                for (let yOffset = -1; yOffset <= 1; yOffset++) {
                    // skip if y out of bounds
                    if (i + yOffset < 0 || i + yOffset >= lines.length) continue;

                    for (let xOffset = -1; xOffset <= 1; xOffset++) {
                        // skip if x out of bounds
                        if (j + xOffset < 0 || xOffset >= lines[i].length) continue;
                        // Skip if is origin
                        if (xOffset === 0 && yOffset === 0) continue;

                        // skip if space has been searched already
                        let alreadySearched = false;
                        for (let coord of searched) {
                            if (coord.y === i + yOffset && coord.x === j + xOffset) {
                                alreadySearched = true;
                                break;
                            }
                        }
                        if (alreadySearched) continue;

                        const spot = lines[i + yOffset][j + xOffset]
                        // console.log(xOffset)
                        // console.log(spot, i + yOffset, j + xOffset)

                        // search spot for digit
                        if (/\d/.test(spot)) {
                            searched.push({ x: i + xOffset, y: j + yOffset })
                            // console.log('found neighbor', spot)

                            let numstring = spot;

                            let leftIndex = j + xOffset - 1;
                            let checkSpot = lines[i + yOffset][leftIndex]

                            while (checkSpot !== undefined && /\d/.test(checkSpot)) {
                                numstring = checkSpot + numstring;
                                searched.push({ x: leftIndex, y: i + yOffset })
                                leftIndex--;
                                // console.log('currentnum', checkSpot)
                                checkSpot = lines[i + yOffset][leftIndex]
                                // console.log('next num', checkSpot)
                            }

                            let rightIndex = j + xOffset + 1;
                            checkSpot = lines[i + yOffset][rightIndex];
                            while (checkSpot !== undefined && /\d/.test(checkSpot)) {
                                numstring = numstring + checkSpot;
                                searched.push({ x: rightIndex, y: i + yOffset })
                                rightIndex++;
                                checkSpot = lines[i + yOffset][rightIndex];
                            }

                            numsFound.push(numstring);
                        }
                        if (numsFound.length > 2) break;
                    }
                }
                if (numsFound.length == 2) {
                    let gearValue = parseInt(numsFound[0]) * parseInt(numsFound[1])
                    result += gearValue
                    console.log('gear found, value:', gearValue)
                }
                // console.log(numsFound)
            }
        }

    }
    return result
}

// class Engine {
//     private lines: string[];
//     public width: number;
//     public height: number;
//
//     constructor(input: string) {
//         this.lines = input.trim().split(/\n\s*/)
//         this.height = this.lines.length;
//         this.width = this.lines[0].length;
//     }
//
//     public getRow(y: number) {
//         if (y < 0 || y >= this.height) {
//             console.log("Row out of bounds")
//             return null;
//         }
//         return this.lines[y];
//     }
//
//     public getCell(x: number, y: number) {
//         let row = this.getRow(y);
//         if (!row || x < 0 || x >= row.length) {
//             console.log("x out of bounds");
//             return null
//         }
//         return this.lines[y][x];
//     }
//
// }
