from solution import part_one, part_two


# def test_score_line():
#     assert part_one("")


def test_part_one():
    with open('../input', 'r') as file:
        assert part_one(file.read()) == 7192


# def test_part_two():
#     for case in part_two_cases:
#         assert part_two(case[0]) == case[1]
#
#
# def test_part_one_final():
#     with open("../input", "r") as file:
#         input = file
#
#         assert part_one_answer is not None
#         assert part_one(input) == part_one_answer
#
#
# def test_part_two_final():
#     with open("../input", "r") as file:
#         input = file
#
#         assert part_two_answer is not None
#         assert part_two(input) == part_two_answer
