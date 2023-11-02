from solution import part_one, part_two


def test_part_one():
    with open('../input', 'r') as file:
        input = file.readlines()
        assert part_one(input) == 445


def test_part_two():
    test1 = ["+1", "-2", "+3", "+1",]
    assert part_two(test1) == 2
    test2 = ["+3", "+3", "+4", "-2", "-4"]
    assert part_two(test2) == 10
