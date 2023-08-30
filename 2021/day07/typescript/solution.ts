export function partOne(input: string) {
    let crabFormation = input.split(",").map((el) => Number(el));
    let bestFuel = Infinity;

    for (
        let i = Math.min(...crabFormation);
        i <= Math.max(...crabFormation);
        i++
    ) {
        let fuel = 0;
        for (let crab of crabFormation) {
            fuel += Math.abs(crab - i);
        }
        if (fuel < bestFuel) {
            bestFuel = fuel;
        }
    }
    return bestFuel;
}

export function partTwo(input: string) {
    let crabFormation = input.split(",").map((el) => Number(el));
    let bestFuel = Infinity;

    for (
        let i = Math.min(...crabFormation);
        i <= Math.max(...crabFormation);
        i++
    ) {
        let fuel = 0;
        for (let crab of crabFormation) {
            let distance = Math.abs(crab - i);
            fuel += ((distance + 1) / 2) * distance;
        }
        if (fuel < bestFuel) {
            bestFuel = fuel;
        }
    }
    return bestFuel;
}
