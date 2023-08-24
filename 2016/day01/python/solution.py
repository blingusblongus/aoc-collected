directions = ["N", "E", "S", "W"]


def part_one(input):
    facing = "N"
    position = {'x': 0, 'y': 0}

    for step in input.strip().split(", "):
        turn = step[0]
        count = int(step[1:])

        if turn == "L":
            facing = directions[(directions.index(facing) - 1) %
                                4]
        elif turn == "R":
            facing = directions[(directions.index(facing) + 1) %
                                4]
        else:
            raise Exception("Invalid Turn")

        move(position, facing, count)

    return abs(position['x']) + abs(position['y'])


def part_two(input):
    facing = "N"
    position = {'x': 0, 'y': 0}
    visited = set()

    for step in input.strip().split(", "):
        turn = step[0]
        count = int(step[1:])

        if turn == "L":
            facing = directions[(directions.index(facing) - 1) %
                                4]
        elif turn == "R":
            facing = directions[(directions.index(facing) + 1) %
                                4]
        else:
            raise Exception("Invalid Turn")

        for _ in range(0, count):
            move(position, facing, 1)
            loc = f"{position['x']},{position['y']}"

            if loc in visited:
                return abs(position['x']) + abs(position['y'])
            else:
                visited.add(loc)


def move(position, direction, distance):
    if direction == "N":
        position['y'] += distance
    if direction == "E":
        position['x'] += distance
    if direction == "S":
        position['y'] -= distance
    if direction == "W":
        position['x'] -= distance


with open("../input", "r") as file:
    input = file.read()
    print("part one:", part_one(input))
    print("part two:", part_two(input))
