
def part_one(input, log=False):
    input = input.strip()
    i = 0

    while i < len(input) - 1:
        if log is True:
            print(input)
        if i + 1 > len(input) - 1:
            return len(input)
        if is_case_match(input[i], input[i + 1]):
            if i == 0 and i + 1 < len(input):
                input = input[2:]
            else:
                input = input[:i] + input[i+2:]
            i = min(i - 2, i - 1, 0)
        else:
            i += 1
    return len(input)


def is_case_match(letter1, letter2):
    if letter1.isupper():
        return letter1.lower() == letter2
    elif letter1.islower():
        return letter1.upper() == letter2

    print(f"Uh oh, is_case_match failed - encountered [{letter1}, {letter2}]")
