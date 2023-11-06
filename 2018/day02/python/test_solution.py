from solution import part_one, part_two, find_one_different


def test_part_one():
    with open('../input', 'r') as file:
        assert part_one(file.read()) == 7192


def test_find_one_different():
    result = find_one_different("fghij", "fguij")
    assert result[0] is True
    assert result[1] == "fgij"


def test_part_two_sample():
    input = """abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz
"""
    assert part_two(input) == "fgij"
