import re
import string
PATCH_VALUE_PATTERN = re.compile(r'#(\d+) @ (\d+),(\d+): (\d+)x(\d+)$')


def part_one(input: string):
    map = build_map(input)

    count = 0
    for key in map:
        if map[key] > 1:
            count += 1
    return count


def part_two(input: string):
    map = build_map(input)

    for line in input.strip().split("\n"):
        id, left, top, width, height = get_patch_values(line)
        patch_valid = True

        for w in range(0, width):
            if patch_valid is not True:
                break
            for h in range(0, height):
                if patch_valid is not True:
                    break
                coord = str(left + w) + "," + str(top + h)
                if map[coord] != 1:
                    patch_valid = False
                    break

        if patch_valid is True:
            return int(id)


def get_patch_values(line: string):
    id, left, top, width, height = PATCH_VALUE_PATTERN.findall(line)[0]
    id = int(id)
    left = int(left)
    top = int(top)
    width = int(width)
    height = int(height)
    return id, left, top, width, height


def build_map(input: string):
    lines = input.strip().split("\n")

    map = {}

    for line in lines:
        id, left, top, width, height = get_patch_values(line)

        for w in range(0, width):
            for h in range(0, height):
                coord = str(left + w) + "," + str(top + h)
                map[coord] = map.get(coord, 0) + 1
    return map


with open("../input", "r") as file:
    input = file.read()
    print("part one:", part_one(input))
    print("part two:", part_two(input))
