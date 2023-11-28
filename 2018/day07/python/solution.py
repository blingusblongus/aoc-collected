from pprint import pprint
import re
LINE_RE = re.compile(r"Step (\w) must be finished before step (\w) can begin.")


def part_one(input):
    tasks = create_tasks(input.strip())
    finished_tasks = 0
    result = ""

    while finished_tasks < tasks.__len__():
        for key in sorted(tasks.keys()):
            task = tasks[key]

            if task["done"] is True:
                continue

            deps = task["deps"]
            deps_complete = True

            for dep_key in deps:
                if tasks[dep_key]["done"] is False:
                    deps_complete = False

            if deps_complete:
                task["done"] = True
                finished_tasks += 1
                result += key
                break
    return result


def create_tasks(s):
    tasks = {}
    for line in s.strip().splitlines():
        try:
            dep, name = LINE_RE.findall(line)[0]

            task = tasks.get(name, {"deps": set(), "done": False})
            tasks.setdefault(dep, {"deps": set(), "done": False})
            task["deps"].add(dep)
            tasks[name] = task
        except ValueError as e:
            print(e)
            print(f"Error creating task from line: {line}")

    return tasks
