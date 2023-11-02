def part_one(input):
    count = 0
    for line in input:
        count += int(line)
    return count


def part_two(input):
    freq = 0
    visitedFreqs = set()
    visitedFreqs.add(freq)

    while True:
        for num in input:
            freq = freq + int(num)
            if (freq not in visitedFreqs):
                visitedFreqs.add(freq)
            else:
                return freq


with open("../input", "r") as file:
    input = file.readlines()
    print("part one:", part_one(input))
    print("part two:", part_two(input))
