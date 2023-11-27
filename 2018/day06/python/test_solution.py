from solution import part_one
from solution import manhattan_distance
from solution import within_distance, get_coord_tuples
from solution import part_two

input = """
1, 1
1, 6
8, 3
3, 4
5, 5
8, 9
"""


def test_manhattan_distance():
    assert manhattan_distance((1, 1), (1, 6)) == 5
    assert manhattan_distance((3, 3), (1, 1)) == 4


def test_part_one_sample():
    assert part_one(input) == 17


def test_part_one_actual():
    with open("../input", "r") as file:
        result = part_one(file.read())
        # assert result > 0
        # assert result < 5370
        # assert result < 4613
        assert result == 4589


def test_within_distance():
    tuples = get_coord_tuples(input.strip())
    assert within_distance((4, 3), tuples, 32) is True
    assert within_distance((4, 2), tuples, 32) is False
    assert within_distance((0, 0), tuples, 32) is False


def test_part_two_sample():
    result = part_two(input, 32)
    assert result == 16


def test_part_two_actual():
    with open("../input", "r") as file:
        result = part_two(file.read(), 10000)
        assert result == 40252
