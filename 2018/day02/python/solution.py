def part_one(input):
    twos = 0
    threes = 0

    for line in input.strip().split("\n"):
        counts = {}

        for letter in line.strip():
            counts[letter] = counts.get(letter, 0) + 1

        twosFound = False
        threesFound = False
        for letter in counts:
            if (twosFound is True and threesFound is True):
                continue
            if twosFound is not True and counts[letter] == 2:
                twosFound = True
            if threesFound is not True and counts[letter] == 3:
                threesFound = True

        if twosFound is True:
            twos += 1
        if threesFound is True:
            threes += 1
    return twos * threes


def part_two(input):
    return None


with open("../input", "r") as file:
    input = file.read()
    print("part one:", part_one(input))
    print("part two:", part_two(input))
