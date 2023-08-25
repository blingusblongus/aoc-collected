export function partOne(startingLayout: string, directions: string) {
    let stacks = startingLayout
        .trim()
        .split(",")
        .map((s) => s.split(""));
    for (let direction of parseDirections(directions)) {
        const from = stacks[direction[1] - 1];
        let to = stacks[direction[2] - 1];
        const numCrates = direction[0];

        // Remove crates from top of stack and reverse them
        let movedCrates = from.splice(0, numCrates).reverse();

        // stick them on top of the target stack, update stacks variable
        stacks[direction[2] - 1] = [...movedCrates, ...to];
    }

    return stacks.map((arr) => arr[0]).join("");
}

export function partTwo(startingLayout: string, directions: string) {
    let stacks = startingLayout
        .trim()
        .split(",")
        .map((s) => s.split(""));
    for (let direction of parseDirections(directions)) {
        const from = stacks[direction[1] - 1];
        let to = stacks[direction[2] - 1];
        const numCrates = direction[0];

        // Remove crates from top of stack and reverse them
        let movedCrates = from.splice(0, numCrates);

        // stick them on top of the target stack, update stacks variable
        stacks[direction[2] - 1] = [...movedCrates, ...to];
    }

    return stacks.map((arr) => arr[0]).join("");
}

function parseDirections(input: string): number[][] {
    const directions = input.trim().split(/\n/g);
    const dirArr = directions.map((direction) => {
        return direction.match(/move\s(\d+)\sfrom\s(\d+)\sto\s(\d+)/);
    });
    return dirArr?.map((match) => {
        if (!match || !match[1] || !match[2] || !match[3])
            throw Error("Directions could not be parsed");
        return [match[1], match[2], match[3]].map((el) => Number(el));
    });
}
