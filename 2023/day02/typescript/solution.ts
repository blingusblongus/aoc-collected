type Maximums = {
    [key: string]: number
}
export function partOne(input: string, maximums: Maximums) {
    let idSums = 0
    let id = 0;
    for (let line of input.trim().split(/\n\s*/g)) {
        id++
        let gameIsValid = checkGame(line, maximums)

        if (!gameIsValid) {
            continue;
        }
        idSums += id;
    }
    return idSums;
}

export function checkGame(line: string, maximums: Maximums) {
    const pulls = line.split(";")

    for (let pull of pulls) {
        for (let color of ["green", "red", "blue"]) {
            let re = new RegExp("(\\d+) " + color);
            let m = pull.match(re);
            if (m) {
                let count = parseInt(m[1])
                if (maximums[color] < count) {
                    return false
                }
            }
        }
    }
    return true
}



