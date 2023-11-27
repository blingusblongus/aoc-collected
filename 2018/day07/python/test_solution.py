from solution import part_one
from solution import create_tasks
from pprint import pprint

input = """
Step C must be finished before step A can begin.
Step C must be finished before step F can begin.
Step A must be finished before step B can begin.
Step A must be finished before step D can begin.
Step B must be finished before step E can begin.
Step D must be finished before step E can begin.
Step F must be finished before step E can begin.
"""


# def test_create_tasks():
#     tasks = create_tasks(input.strip())
#     pprint(tasks)


def test_part_one_sample():
    assert part_one(input) == "CABDFE"


def test_part_one_actual():
    with open("../input", "r") as file:
        result = part_one(file.read())
        print(result)
        assert result == "EUGJKYFQSCLTWXNIZMAPVORDBH"
