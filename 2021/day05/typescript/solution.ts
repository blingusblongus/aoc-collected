type Coords = [number, number];
type Vent = [Coords, Coords];
export function partOne(input: string) {
    const vents: Vent[] = parseInput(input);
    const map = new Map<string, number>();

    for (let vent of vents) {
        const [[startX, startY], [endX, endY]] = vent;
        switch (getLineType(vent)) {
            case "horizontal":
                for (
                    let i = Math.min(startX, endX);
                    i <= Math.max(startX, endX);
                    ++i
                ) {
                    let strCoords = toStrCoords([i, startY]);
                    let count = map.get(strCoords);
                    if (count) {
                        map.set(strCoords, count + 1);
                    } else {
                        map.set(strCoords, 1);
                    }
                }
                break;
            case "vertical":
                for (
                    let i = Math.min(startY, endY);
                    i <= Math.max(startY, endY);
                    ++i
                ) {
                    let strCoords = toStrCoords([startX, i]);
                    let count = map.get(strCoords);
                    if (count) {
                        map.set(strCoords, count + 1);
                    } else {
                        map.set(strCoords, 1);
                    }
                }
                break;
            default:
                break;
        }
    }

    let dangerZones = 0;
    for (let count of map.values()) {
        if (count > 1) ++dangerZones;
    }

    return Array.from(map.values()).filter((v) => v > 1).length;
}

export function partTwo(input: string) {
    const vents: Vent[] = parseInput(input);
    const map = new Map<string, number>();

    for (let vent of vents) {
        const [[startX, startY], [endX, endY]] = vent;
        switch (getLineType(vent)) {
            case "horizontal":
                for (
                    let i = Math.min(startX, endX);
                    i <= Math.max(startX, endX);
                    ++i
                ) {
                    let strCoords = toStrCoords([i, startY]);
                    let count = map.get(strCoords);
                    if (count) {
                        map.set(strCoords, count + 1);
                    } else {
                        map.set(strCoords, 1);
                    }
                }
                break;
            case "vertical":
                for (
                    let i = Math.min(startY, endY);
                    i <= Math.max(startY, endY);
                    ++i
                ) {
                    let strCoords = toStrCoords([startX, i]);
                    let count = map.get(strCoords);
                    if (count) {
                        map.set(strCoords, count + 1);
                    } else {
                        map.set(strCoords, 1);
                    }
                }
                break;
            case "diagonal":
                const dx = endX - startX;
                const dy = endY - startY;

                const stepX = dx > 0 ? 1 : -1;
                const stepY = dy > 0 ? 1 : -1;

                for (
                    let x = startX, y = startY;
                    x !== endX + stepX;
                    x += stepX, y += stepY
                ) {
                    let strCoords = toStrCoords([x, y]);
                    let count = map.get(strCoords);

                    if (count) {
                        map.set(strCoords, count + 1);
                    } else {
                        map.set(strCoords, 1);
                    }
                }
                break;
            default:
                break;
        }
    }

    let dangerZones = 0;
    for (let count of map.values()) {
        if (count > 1) ++dangerZones;
    }

    return Array.from(map.values()).filter((v) => v > 1).length;
}

function toStrCoords(coords: Coords) {
    return coords[0] + "," + coords[1];
}

function parseInput(input: string) {
    return input
        .trim()
        .split(/\n/g)
        .map((line) =>
            line
                .split(" -> ")
                .map((end) => end.split(",").map((n) => parseInt(n)))
        ) as Vent[];
}

export function getLineType(vent: Vent) {
    const [[startX, startY], [endX, endY]] = vent;

    if (startX === endX) {
        return "vertical";
    }
    if (startY === endY) {
        return "horizontal";
    }
    return "diagonal";
}
