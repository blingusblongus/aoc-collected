from solution import part_one, part_two

testInput = """#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2"""


def test_part_one_sample():
    assert part_one(testInput) == 4


def test_part_one():
    with open('../input', 'r') as file:
        assert part_one(file.read()) == 103806


def test_part_two():
    with open('../input', 'r') as file:
        assert part_two(file.read()) == 625
# def test_part_one():
#     with open('../input', 'r') as file:
#         assert part_one(file.read()) == 103806
