from solution import part_one, part_two

part_one_cases = []
part_one_answer = None
part_two_cases = []
part_two_answer = None


def test_part_one():
    for case in part_one_cases:
        assert part_one(case[0]) == case[1]


def test_part_two():
    for case in part_two_cases:
        assert part_two(case[0]) == case[1]


def test_part_one_final():
    with open("../input", "r") as file:
        input = file.read()

        assert part_one_answer is not None
        assert part_one(input) == part_one_answer


def test_part_two_final():
    with open("../input", "r") as file:
        input = file.read()

        assert part_two_answer is not None
        assert part_two(input) == part_two_answer
