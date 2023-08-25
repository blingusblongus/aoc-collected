def part_one(input):

    high = 0
    for elf in input.strip().split("\n\n"):
        total = 0
        for food in elf.split("\n"):
            total += int(food)

        if total > high:
            high = total

    return high


def part_two(input):
    elfTotals = []
    for elf in input.strip().split("\n\n"):
        total = 0
        for food in elf.split("\n"):
            total += int(food)

        elfTotals.append(total)

    elfTotals.sort(reverse=True)

    topThreeTotal = 0
    for i in range(0, 3):
        topThreeTotal += elfTotals[i]

    return topThreeTotal


with open("../input", "r") as file:
    input = file.read()
    print("part one:", part_one(input))
    print("part two:", part_two(input))
