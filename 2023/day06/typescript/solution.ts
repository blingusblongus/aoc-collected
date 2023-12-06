export function partOne(input: string) {
    const [timeStr, distStr] = input.trim().split(/\n/)
    const times = timeStr.match(/\d+/g)?.map(Number);
    const distances = distStr.match(/\d+/g)?.map(Number);
    if (!times || !distances || times.length !== distances.length) {
        throw Error("Error parsing times/distances");
    }

    let winProduct = 1;
    for (let i = 0; i < times.length; ++i) {
        const wins = getWinningRange(times[i], distances[i])
        winProduct *= wins.length;
    }
    return winProduct
}

type GameData = { timePressed: number; distance: number }
export function getWinningRange(duration: number, goalDistance: number) {
    const result: GameData[] = [];

    for (let i = 0; i < duration; ++i) {
        const speed = i;
        const remainingTime = duration - i;

        const distance = speed * remainingTime;
        if (distance > goalDistance) {
            result.push({ timePressed: i, distance })
        }
    }

    return result;
}

export function partTwo(input: string) {
    const [timeStr, distStr] = input.trim().split(/\n/)
    const times = timeStr.match(/\d+/g);
    const distances = distStr.match(/\d+/g);

    if (!times || !distances) {
        throw Error("Error parsing times/distances");
    }
    const time = parseInt(times.join(""));
    const distance = parseInt(distances.join(""));

    const wins = getWinningRange(time, distance)
    return wins.length
}

