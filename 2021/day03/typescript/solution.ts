export function partOne(input: string) {
    const lines = parseInput(input);
    const half = lines.length / 2;

    let gamma = "";
    let epsilon = "";

    for (let i = 0; i < lines[0].length; i++) {
        let countOnes = 0;
        let countZeroes = 0;

        for (let line of lines) {
            line[i] === "1" ? ++countOnes : ++countZeroes;
            if (countOnes > half) {
                gamma += "1";
                epsilon += "0";
                break;
            } else if (countZeroes > half) {
                gamma += "0";
                epsilon += "1";
                break;
            }
        }
    }

    return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

export function partTwo(input: string) {
    const lines = parseInput(input);
    let oxygen = getLifeSupportRating(true, lines);
    let carbon = getLifeSupportRating(false, lines);
    return parseInt(oxygen, 2) * parseInt(carbon, 2);
}

function parseInput(input: string) {
    return input.trim().split(/\s*\n/g);
}

function getLifeSupportRating(isOxygen: boolean, arr: string[]) {
    let nums = [...arr];
    let oxyOrCarb = isOxygen ? "1" : "0";

    for (let i = 0; i < nums[0].length; i++) {
        let count = 0;

        for (let bin of nums) {
            if (bin[i] === oxyOrCarb) count++;
        }

        if (count > nums.length - count) {
            nums = nums.filter((bin) => bin[i] === "1");
        } else if (count < nums.length - count) {
            nums = nums.filter((bin) => bin[i] === "0");
        } else {
            nums = nums.filter((bin) => bin[i] === oxyOrCarb);
        }

        if (nums.length > 1) continue;
        return nums[0];
    }

    throw Error("error while filtering values");
}
