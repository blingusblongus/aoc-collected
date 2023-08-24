from solution import part_one, part_two


def test_part_one():
    assert part_one("R2, L3") == 5
    assert part_one("R2, R2, R2") == 2
    assert part_one("R5, L5, R5, R3") == 12


def test_part_two():
    assert part_two("R8, R4, R4, R8") == 4
