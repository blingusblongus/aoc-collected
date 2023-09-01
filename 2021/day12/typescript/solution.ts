type Connection = [string, string];
type Node = {
    visited: boolean;
    isBig: boolean;
    connectedNodes: Set<string>;
};
export function partOne(input: string): number {
    const connections = parseConnections(input) as Connection[];
    const nodeMap = createNodeMap(connections);

    const paths = findPaths(nodeMap);
    return paths.length;
}

export function partTwo(input: string) {
    return null;
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
            visited: false,
            isBig: isUpperCase(n1),
            connectedNodes: new Set<string>().add(n2),
        });
    }
}

function isUpperCase(s: string) {
    return s === s.toUpperCase();
}

function findPaths(
    nodeMap: Map<string, Node>,
    nodeName = "start",
    currentPath: string[] = [],
    paths: string[][] = []
): string[][] {
    const node = nodeMap.get(nodeName);
    if (!node) throw Error("Can't read node:" + nodeName);

    if (nodeName === "end") {
        paths.push(currentPath.concat(nodeName));
        return paths;
    }

    let wasVisited = node.visited;
    node.visited = true;

    for (let n2 of node?.connectedNodes) {
        let node2 = nodeMap.get(n2);
        if (!node2) continue;
        if (!node2.isBig && node2.visited) continue;

        // Clone the current path before recursion
        const newPath = [...currentPath, nodeName];
        findPaths(nodeMap, n2, newPath, paths);
    }

    // Unmark visited nodes as we backtrack
    node.visited = wasVisited;
    return paths;
}
