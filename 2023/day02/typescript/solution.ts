type Cubes = {
    [key: string]: number
}
export function partOne(input: string, cubes: Cubes) {
    let idSums = 0
    let id = 0;
    for (let line of input.trim().split(/\n\s*/g)) {
        id++
        let gameIsValid = checkGame(line, cubes)

        if (!gameIsValid) {
            continue;
        }
        idSums += id;
    }
    return idSums;
}

export function checkGame(line: string, cubes: Cubes) {
    const pulls = line.split(";")

    for (let pull of pulls) {
        for (let color of ["green", "red", "blue"]) {
            let re = new RegExp("(\\d+) " + color);
            let m = pull.match(re);
            if (m) {
                let count = parseInt(m[1])
                if (cubes[color] < count) {
                    return false
                }
            }
        }
    }
    return true
}

export function getGameMinimums(line: string) {
    const pulls = line.split(";")
    const mins = { red: 0, green: 0, blue: 0 }

    for (let pull of pulls) {
        for (let color of ["green", "red", "blue"]) {
            let re = new RegExp("(\\d+) " + color);
            let m = pull.match(re);
            if (m && mins[color] < parseInt(m[1])) {
                mins[color] = parseInt(m[1])
            }
        }
    }
    return mins
}

function getSetPower(cubes: Cubes) {
    return cubes.red * cubes.green * cubes.blue;
}

export function partTwo(input: string) {
    let totalPower = 0;
    for (let line of input.trim().split(/\n\s*/g)) {
        const mins = getGameMinimums(line)
        const power = getSetPower(mins)
        totalPower += power;
    }
    return totalPower
}



