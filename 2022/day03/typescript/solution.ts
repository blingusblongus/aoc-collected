export function partOne(input: string) {
    let rucksacks = input
        .trim()
        .split(/\n+/g)
        .map((sack) => {
            return [
                sack.slice(0, sack.length / 2),
                sack.slice(sack.length / 2),
            ];
        });

    const findMatching = (rucksack: string[]) => {
        const [first, second] = rucksack;

        for (let x of first) {
            for (let y of second) {
                if (x === y) {
                    return x;
                }
            }
        }

        throw Error("No match in findMatching");
    };

    const doubles = rucksacks.map((sack) => findMatching(sack));

    return doubles.reduce((sum, el) => (sum += getPriority(el)), 0);
}

export function partTwo(input: string) {
    let rucksacks = input.trim().split(/\n+/g);
    let groups: string[][] = [];

    while (rucksacks.length > 0) {
        groups.push(rucksacks.splice(0, 3));
    }

    const findMatching = (group: string[]) => {
        const [first, second, third] = group;

        for (let x of first) {
            for (let y of second) {
                if (x === y) {
                    for (let z of third) {
                        if (x === z) {
                            return x;
                        }
                    }
                }
            }
        }

        throw Error("No match in alphabet");
    };

    const badges = groups.map((group) => findMatching(group));

    return badges.reduce((sum, el) => (sum += getPriority(el)), 0);
}

const getPriority = (letter: string) => {
    const order = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return order.indexOf(letter) + 1;
};
