from solution import part_one, is_case_match

input = "dabAcCaCBAcCcaDA"


def test_is_case_match():
    assert is_case_match("a", "A") is True
    assert is_case_match("a", "a") is False
    assert is_case_match("b", "A") is False


def test_part_one_sample():
    assert part_one(input, True) == 10


def test_part_one_actual():
    with open("../input", "r") as file:
        assert part_one(file.read()) == 11720
