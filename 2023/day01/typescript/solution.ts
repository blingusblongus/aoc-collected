const map = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
}


export function partOne(input: string) {
    const re = /\d/g
    const lines = input.trim().split(/\s*\n/g)
    let sum = 0;

    for (let line of lines) {
        const [first, last] = getEdgeNums(line, re)
        const val = parseInt(map[first].toString() + map[last].toString())
        console.log(val)
        sum += val
    }
    return sum;
}

export function partTwo(input: string) {
    console.log('part two')
    // const re = /\d|one|two|three|four|five|six|seven|eight|nine/
    const re = /(?=\b(\d)|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine))\b/g
    const lines = input.trim().split(/\s*\n/g)
    let sum = 0;

    console.log('test edge case')
    console.log(getEdgeNums('eighteighthree', re))
    for (let line of lines) {
        const [first, last] = getEdgeNums(line, re)
        const val = parseInt(map[first].toString() + map[last].toString())
        console.log(val)
        sum += val
    }

    return sum;
}


function getEdgeNums(s: string, re) {
    let match = s.match(re);
    //
    // re = stringsAllowed ? /\d/ : /\d|one|two|three|four|five|six|seven|eight|nine/
    // const end_re = /\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/;



    // console.log('match', s.match(re))
    // console.log('endmatch', s.split().reverse().split().join().match(end_re))
    if (!match || match[0] == null) {
        throw Error("something wrong")
    }

    return [match[0], match[match.length - 1]];
    // return [match[0], end_re[0]]
}



// export function partOne(input: string) {
//     const lines = input.trim().split(/\s*\n/g)
//     let sum = 0
//
//     for (let line of lines) {
//         let num1: number | null;
//         let i = 0;
//         for (; i < line.length; ++i) {
//             num1 = parseInt(line[i]);
//             if (!isNaN(num1)) {
//                 break;
//             }
//         }
//
//         let num2: number | null;
//         let j = line.length - 1;
//         for (; j > -1; --j) {
//             num2 = parseInt(line[j])
//             if (!isNaN(num2)) break;
//         }
//
//         sum += parseInt(num1.toString() + num2.toString())
//     }
//     return sum;
// }
