import re

map = {'1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, "one": 1,
       "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9, }

forward_re = re.compile(r"\d|one|two|three|four|five|six|seven|eight|nine")
digit_re = re.compile(r"\d")
backward_re = re.compile(r"\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin")


def part_one(input):
    sum = 0
    for line in input.strip().splitlines():
        first, last = find_edges(line)
        two_digit = int(str(map[first]) + str(map[last]))
        sum += two_digit
    return sum


def part_two(input):
    sum = 0
    for line in input.strip().splitlines():
        first, last = find_edges(line, allow_strings=True)
        two_digit = int(str(map[first]) + str(map[last]))
        sum += two_digit
    return sum


def find_edges(line: str, allow_strings=False):
    first = re.search(forward_re if allow_strings else digit_re, line)
    line = line[::-1]
    last = re.search(backward_re if allow_strings else digit_re, line)

    if first.group() and last.group():
        return first.group(), last.group()[::-1]
    else:
        print("something wrong, ", first, last)
