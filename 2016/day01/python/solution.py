def part_one(input):
    directions = ["N", "E", "S", "W"]
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
    print(part_one(file.read()))
