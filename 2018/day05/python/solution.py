def part_one(input, log=False):
    input = input.strip()
    return len(remove_polymers(input))


def part_two(input):
    allLower = "abcdefghijklmnopqrstuvwxyz"
    lowest = float('inf')

    for letter in allLower:
        reduced_polymer_length = len(remove_polymers(
            input, [letter, letter.upper()]))
        if reduced_polymer_length < lowest:
            lowest = reduced_polymer_length
    return lowest


def is_case_match(letter1, letter2):
    if letter1.isupper():
        return letter1.lower() == letter2
    elif letter1.islower():
        return letter1.upper() == letter2

    print(f"Uh oh, is_case_match failed - encountered [{letter1}, {letter2}]")


def remove_polymers(input, skip=[]):
    chars = list(reversed(input.strip()))
    result = []

    while len(chars) > 0:
        curr = chars.pop()

        # skip letters if specified
        if curr in skip:
            continue

        # populate prev stack if empty
        if len(result) < 1:
            result.append(curr)
            continue

        if is_case_match(result[-1], curr):
            result.pop()
        else:
            result.append(curr)

    return "".join(result)
