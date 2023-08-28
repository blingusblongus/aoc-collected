def part_one(input):
    return find_repeat_in_window(input.strip(), 4)


def part_two(input):
    return find_repeat_in_window(input.strip(), 14)


def find_repeat_in_window(input, windowSize):
    for i in range(windowSize - 1, len(input)):
        marker = set()

        for j in range(0, windowSize):
            marker.add(input[i-j])

        if len(marker) == windowSize:
            return i + 1

    return -1


with open("../input", "r") as file:
    input = file.read()
    print("part one:", part_one(input))
    print("part two:", part_two(input))
