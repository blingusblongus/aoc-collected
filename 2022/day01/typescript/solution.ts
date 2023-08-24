export function partOne(input: string) {
    let highTotal = 0;
    let elves = parseElves(input);

    elves.forEach((elf) => {
        const calories = elf.reduce((sum, el) => (sum += Number(el)), 0);

        if (calories > highTotal) highTotal = calories;
    });

    return highTotal;
}

export function partTwo(input: string) {
    let elves = parseElves(input);

    let sortedElves = elves
        .map((elf) => elf.reduce((sum, el) => (sum += Number(el)), 0)) // get each elf total cals
        .sort((a, b) => b - a);

    return sortedElves[0] + sortedElves[1] + sortedElves[2];
}

function parseElves(input: string) {
    return input
        .split(/\n\n+/g) //Split input per elf
        .map((elf) => elf.split(/\n/g)); // map food items per elf
}
