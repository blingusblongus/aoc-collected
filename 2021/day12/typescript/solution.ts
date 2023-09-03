type Connection = [string, string];
type Node = {
    timesVisited: number;
    isBig: boolean;
    connectedNodes: Set<string>;
};
export function partOne(input: string): number {
    const connections = parseConnections(input) as Connection[];
    const nodeMap = createNodeMap(connections);

    const paths = findPathsV2({ nodeMap, smallVisitedTwice: true });
    return paths;
}

export function partTwo(input: string) {
    const connections = parseConnections(input) as Connection[];
    const nodeMap = createNodeMap(connections);

    const paths = findPathsV2({ nodeMap });
    return paths;
}

function parseConnections(input: string) {
    return input
        .trim()
        .split(/\s*\n/)
        .map((line) => line.split("-"));
}

function createNodeMap(connections: Connection[]) {
    let nodeMap = new Map<string, Node>();
    for (let [n1, n2] of connections) {
        initNodeFromConnection(nodeMap, n1, n2);
        initNodeFromConnection(nodeMap, n2, n1);
    }

    return nodeMap;
}

function initNodeFromConnection(
    map: Map<string, Node>,
    n1: string,
    n2: string
) {
    let entry = map.get(n1);
    if (entry) {
        entry.connectedNodes.add(n2);
    } else {
        map.set(n1, {
            timesVisited: 0,
            isBig: isUpperCase(n1),
            connectedNodes: new Set<string>().add(n2),
        });
    }
}

function isUpperCase(s: string) {
    return s === s.toUpperCase();
}

type IFindPaths = {
    nodeMap: Map<string, Node>;
    path?: string[];
    currentNode?: string;
    allowSecondVisit?: boolean;
    visitedTwice?: boolean;
};
function findPaths({ nodeMap, path = [], currentNode = "start" }: IFindPaths) {
    let paths = 0;
    const node = nodeMap.get(currentNode);
    if (!node) return 0;

    if (currentNode === "end") return 1;

    path.push(currentNode);

    const visits = path.filter((pathNode) => pathNode === currentNode).length;
    if (!node.isBig && visits > 1) {
        path.pop();
        return 0;
    }

    for (let nextNode of node.connectedNodes) {
        let node2 = nodeMap.get(nextNode);
        if (!node2) continue;

        paths += findPaths({
            nodeMap,
            path,
            currentNode: nextNode,
        });
    }

    path.pop();
    return paths;
}

type IFindPathsV2 = IFindPaths & {
    smallVisitedTwice?: boolean;
};
function findPathsV2({
    nodeMap,
    path = [],
    currentNode = "start",
    smallVisitedTwice = false,
}: IFindPathsV2) {
    let paths = 0;
    const node = nodeMap.get(currentNode);
    if (!node) return 0;

    if (currentNode === "end") return 1;

    path.push(currentNode);

    let prevTwice = smallVisitedTwice;
    const visits = path.filter((pathNode) => pathNode === currentNode).length;

    if (currentNode === "start" && visits > 1) {
        path.pop();
        return 0;
    }

    if (!node.isBig) {
        if (smallVisitedTwice && visits > 1) {
            path.pop();
            return 0;
        }

        if (!smallVisitedTwice && visits > 1) {
            smallVisitedTwice = true;
        }
    }

    for (let nextNode of node.connectedNodes) {
        let node2 = nodeMap.get(nextNode);
        if (!node2) continue;

        paths += findPathsV2({
            nodeMap,
            path,
            currentNode: nextNode,
            smallVisitedTwice,
        });
    }

    smallVisitedTwice = prevTwice;
    path.pop();
    return paths;
}
