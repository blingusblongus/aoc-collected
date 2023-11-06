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
    lines = input.strip().split("\n")

    for i, line in enumerate(lines):
        for j, line2 in enumerate(lines[i+1:]):
            result = find_one_different(line, line2)
            if result[0] is True:
                return result[1]
    return None


def find_one_different(line1, line2):
    match = False
    diffLetter = ""
    for k, letter in enumerate(line1):
        print('comparing', letter, line2[k])
        if letter != line2[k] and match is False:
            match = True
            diffLetter = letter
        elif letter != line2[k] and match is True:
            match = False
            break

    if match is True:
        return [True, line1.replace(diffLetter, "")]

    return [False, ""]


with open("../input", "r") as file:
    input = file.read()
    print("part one:", part_one(input))
    print("part two:", part_two(input))
