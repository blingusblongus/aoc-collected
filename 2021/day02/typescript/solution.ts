const directionValues = ["up", "down", "forward"] as const;
type DirectionValue = (typeof directionValues)[number];
type Movement = [DirectionValue, number];
type Position = {
    depth: number;
    horiz: number;
};

export function partOne(input: string) {
    return solve(input, navigateSub);
}

export function partTwo(input: string) {
    return solve(input, navigateSubByAim);
}

// Use strategy pattern here, as the only difference between the solutions is specific behavior
function solve(input: string, navBehavior: (x: Movement[]) => Position) {
    const instructions = parseInstructions(input);
    const { horiz, depth } = navBehavior(instructions);
    return calculateResult(horiz, depth);
}

function parseInstructions(input: string): Movement[] {
    return input
        .trim()
        .split(/\s*\n/g)
        .map((x) => {
            const [direction, strVal] = x.split(/\s/);
            if (!directionValues.includes(direction as DirectionValue))
                throw Error(
                    "problem parsing directions: " +
                        [direction, strVal].toString()
                );
            return [direction as DirectionValue, parseInt(strVal)];
        });
}
function navigateSub(directions: Movement[]): Position {
    let depth = 0;
    let horiz = 0;

    for (let [direction, distance] of directions) {
        switch (direction) {
            case "forward":
                horiz += distance;
                break;
            case "up":
                depth -= distance;
                break;
            case "down":
                depth += distance;
                break;
            default:
                throw Error("invalid direction: " + direction);
        }
    }
    return { depth, horiz };
}
function navigateSubByAim(directions: Movement[]): Position {
    let depth = 0;
    let horiz = 0;
    let aim = 0;

    for (let [direction, distance] of directions) {
        switch (direction) {
            case "forward":
                horiz += distance;
                depth += distance * aim;
                break;
            case "up":
                aim -= distance;
                break;
            case "down":
                aim += distance;
                break;
            default:
                throw Error("invalid direction: " + direction);
        }
    }
    return { depth, horiz };
}
function calculateResult(horiz: number, depth: number) {
    return horiz * depth;
}
