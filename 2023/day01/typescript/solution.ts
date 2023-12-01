const map = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, }

export function partOne(input: string) {
    return addEdges(input)
}

export function partTwo(input: string) {
    return addEdges(input, true)
}

function addEdges(input: string, allowStrings = false) {
    const lines = input.trim().split(/\s*\n/g)
    let sum = 0;

    for (let line of lines) {
        const [first, last] = getEdgeNums(line, allowStrings)
        const val = parseInt(map[first].toString() + map[last].toString())
        sum += val
    }

    return sum;
}

function getEdgeNums(s: string, allowStrings = false) {
    const startRe = /\d|one|two|three|four|five|six|seven|eight|nine/
    const end_re = /\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/;

    const start = allowStrings ? s.match(startRe)![0] : s.match(/\d/)![0]
    const end = allowStrings ? reverseString(s).match(end_re) : reverseString(s).match(/\d/)

    return [start, reverseString(end![0])]
}

function reverseString(s: string) {
    return s.split('').reverse().join('')
}


