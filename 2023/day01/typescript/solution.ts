const map = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, }

export function partOne(input: string) {
    const re = /\d/g
    const lines = input.trim().split(/\s*\n/g)
    let sum = 0;

    for (let line of lines) {
        const [first, last] = getEdgeNums(line, re)
        const val = parseInt(map[first].toString() + map[last].toString())
        sum += val
    }
    return sum;
}

export function partTwo(input: string) {
    const lines = input.trim().split(/\s*\n/g)
    let sum = 0;

    for (let line of lines) {
        const [first, last] = getEdgeNums2(line)
        const val = parseInt(map[first].toString() + map[last].toString())
        sum += val
    }

    return sum;
}

function getEdgeNums2(s: string) {
    const startRe = /\d|one|two|three|four|five|six|seven|eight|nine/
    const end_re = /\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/;

    const start = s.match(startRe)![0]
    const end = reverseString(s).match(end_re)
    return [start, reverseString(end![0])]
}

function reverseString(s: string) {
    return s.split('').reverse().join('')
}

function getEdgeNums(s: string, re: RegExp) {
    let match = s.match(re);
    if (!match || match[0] == null) {
        throw Error("something wrong")
    }

    return [match[0], match[match.length - 1]];
}


