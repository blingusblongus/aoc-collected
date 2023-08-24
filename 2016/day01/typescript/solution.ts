const directions = ["N", "E", "S", "W"] as const;

export function partOne(input: string) {
    const steps = parseInput(input);
    let x = 0;
    let y = 0;

    let direction: (typeof directions)[number] = directions[0];

    for (let step of steps) {
        let turn = step[0];
        let distance = parseInt(step.substring(1));

        if (turn === "R") {
            direction = directions[directions.indexOf(direction) + 1] || "N";
        } else {
            direction = directions[directions.indexOf(direction) - 1] || "W";
        }

        switch (direction) {
            case "N":
                y += distance;
                break;
            case "E":
                x += distance;
                break;
            case "S":
                y -= distance;
                break;
            case "W":
                x -= distance;
                break;
        }
    }

    return Math.abs(x) + Math.abs(y);
}

export function partTwo(input: string) {
    const steps = parseInput(input);
    let x = 0;
    let y = 0;

    let set = new Set<string>();

    let direction: (typeof directions)[number] = directions[0];

    for (let step of steps) {
        let turn = step[0];
        let distance = parseInt(step.substring(1));

        if (turn === "R") {
            direction = directions[directions.indexOf(direction) + 1] || "N";
        } else {
            direction = directions[directions.indexOf(direction) - 1] || "W";
        }

        for (let i = 0; i < distance; i++) {
            switch (direction) {
                case "N":
                    y++;
                    break;
                case "E":
                    x++;
                    break;
                case "S":
                    y--;
                    break;
                case "W":
                    x--;
                    break;
            }

            if (set.has(`${x},${y}`)) {
                return Math.abs(x) + Math.abs(y);
            }

            set.add(`${x},${y}`);
        }
    }

    throw new Error("never crossed paths");
}

function parseInput(input: string) {
    return input.split(/,\s/g);
}
