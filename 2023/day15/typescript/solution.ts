export function partOne(input: string) {
    const items = parseInput(input)
    return items.reduce((sum, item) => sum += hashString(item), 0);

    function parseInput(input: string) {
        return input.trim().split(',');
    }
}


export function hashString(s: string) {
    let result = 0;

    for (let letter of s) {
        let charCode = letter.charCodeAt(0)
        result += charCode;
        result *= 17;
        result = result % 256;
    }
    return result;
}


type Instruction = {
    op: '=' | '-';
    label: string;
    focalLength?: number;
}
export function partTwo(input: string) {
    const hash: { [key: number]: Instruction[] } = {};
    let result = 0;

    for (let i = 0; i < 256; ++i) {
        hash[i] = [];
    }

    const items = parseInput(input);

    for (let item of items) {
        let box = hashString(item.label);

        if (item.op === '=') {
            // Add or update lenses
            if (hash[box].some(lens => lens.label === item.label)) {
                for (let i = 0; i < hash[box].length; ++i) {
                    let lens = hash[box][i];
                    if (lens.label === item.label) {
                        hash[box][i] = item;
                    }
                }
            }
            else {
                hash[box].push(item);
            }
        } else {
            // Remove lenses
            hash[box] = hash[box].filter(lens => lens.label !== item.label);
        }
    }

    for (let box in hash) {
        let coefficient = Number(box) + 1;

        for (let i = 0; i < hash[box].length; ++i) {
            let slot = i + 1;
            const { focalLength } = hash[box][i];

            if (!focalLength) throw Error("No focal length")

            result += coefficient * slot * focalLength;
        }
    }
    return result;

    function parseInput(input: string): Instruction[] {
        return input.trim().split(',').map(lens => {
            if (lens.match(/=/)) {
                let [label, focalLength] = lens.split('=');
                return { op: '=', label, focalLength: Number(focalLength) }
            } else {
                return { op: '-', label: lens.split('-')[0] };
            }
        });
    }
}
