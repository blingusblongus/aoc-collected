from solution import part_one, part_two

test_input = """
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
"""

test_input_2 = """
two1nine
eightwothree
abcone2threexyuz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
"""


def test_part_one_sample():
    assert part_one(test_input) == 142


def test_part_two_sample():
    assert part_two(test_input_2) == 281


def test_part_one_actual():
    with open("../input", "r") as file:
        result = part_one(file.read())
        assert result == 54388


def test_part_two_actual():
    with open("../input", "r") as file:
        result = part_two(file.read())
        assert result == 53515
