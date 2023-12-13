# Advent of Code (Collected)

I love the Advent of code, but often wish I had a better system for organizing them, and comparing the strategies and differences between different languages.
Previously, I used separate repos for each language, and usually started a different year for each language as well.

This repo is an effort to centralize my AoC code so I can compare and learn from the different strategies, improve old solutions with my current knowledge, and implement better testing practices overall.

As I review and refactor old solutions, my overall goal is not to code golf, but rather to look for opportunities to write extensible, readable, and reasonably defensive code, as well as try new techniques and strategies.

It's currently a WIP as I migrate my answers in, and doesn't yet contain all my solutions.

# Testing

## Typescript

In project root, create `.env` file with `AOC_SESSION=<your session id>`. You can get your session ID by examining your cookies.

New challenges (and hopefully all of them, when I get around to it) will use your session ID to automatically download the input if it hasn't been downloaded yet, allowing tests to work without committing input to github.

From project root, just run `npm test <pathToFolderOrFile>`.
Vitest will search for files following the naming convention `*.test.ts/js`


## Python

1. Ensure virtual environment is active: `source .venv/bin/activate`
2. Navigate to the `python` directory of the current challenge (e.g., `cd 2018/day01/python`)
3. Run `pytest` to run all files with the name `test_*.py`
4. To prevent pytest from capturing logs in tested functions (so they're printed), add the `--capture=no` flag

`pytest` will look for files with the `test_` prefix, and run functions within them that also have the `test_` prefix and at least one assertion.


# Todo

-   [x] Setup python structure and tests
-   [ ] Add/refactor old Javascript/ts solutions
    -   [ ] 2018
    -   [ ] 2019
    -   [ ] 2020
    -   [ ] 2021
    -   [ ] 2022
-   [ ] Add/refactor old python solutions
-   [ ] Add existing rust solutions
-   [x] Add templates
-   [ ] Script template setup(?)

# Progress

-   [ ] 2023
    -   [x] [DayO1](./2023/day01/)
        -   [Typescript](./2023/day01/typescript/solution.ts) :star: :star:
        -   [Python](./2023/day01/python/solution.ts) :star: :star:
    -   [x] [DayO2](./2023/day02/)
        -   [Typescript](./2023/day02/typescript/solution.ts) :star: :star:
    -   [x] [DayO3](./2023/day03/)
        -   [Typescript](./2023/day03/typescript/solution.ts) :star: :star:
    -   [x] [DayO4](./2023/day04/)
        -   [Typescript](./2023/day04/typescript/solution.ts) :star: :star:
    -   [ ] [DayO5](./2023/day05/)
        -   [Typescript](./2023/day05/typescript/solution.ts) :star: :star:
    -   [x] [DayO6](./2023/day06/)
        -   [Typescript](./2023/day06/typescript/solution.ts) :star: :star:
    -   [x] [DayO7](./2023/day07/)
        -   [Typescript](./2023/day07/typescript/solution.ts) :star: :star:
    -   [ ] Day08
        -   Typescript :star:
    -   [x] [DayO9](./2023/day09/)
        -   [Typescript](./2023/day09/typescript/solution.ts) :star: :star:
    -   [x] [Day11](./2023/day11/)
        -   [Typescript](./2023/day11/typescript/solution.ts) :star: :star:
    -   [ ] [Day13](./2023/day13/)
        -   [Typescript](./2023/day13/typescript/solution.ts) :star:
-   [ ] 2022
    -   [x] Day01
        -   [Typescript](./2022/day01/typescript/solution.ts) :star: :star:
        -   [Python](./2022/day01/python/solution.py) :star: :star:
        -   [Rust](./2022/day01/rust/src/main.rs) :star: :star:
    -   [x] Day02
        -   [Typescript](./2022/day02/typescript/solution.ts) :star: :star:
    -   [x] Day03
        -   [Typescript](./2022/day03/typescript/solution.ts) :star: :star:
    -   [x] Day04
        -   [Typescript](./2022/day04/typescript/solution.ts) :star: :star:
    -   [x] Day05
        -   [Typescript](./2022/day05/typescript/solution.ts) :star: :star:
    -   [x] Day06
        -   [Typescript](./2022/day06/typescript/solution.ts) :star: :star:
        -   [Python](./2022/day06/python/solution.py) :star: :star:
    -   [x] Day07
        -   [Typescript](./2022/day07/typescript/solution.ts) :star: :star:
    -   [x] Day08
        -   [Typescript](./2022/day08/typescript/solution.ts) :star: :star:
-   [ ] 2021
    -   [x] [DayO1](./2021/day01/)
        -   [Typescript](./2021/day01/typescript/solution.ts) :star: :star:
    -   [x] [DayO2](./2021/day02/)
        -   [Typescript](./2021/day02/typescript/solution.ts) :star: :star:
    -   [x] [DayO3](./2021/day03/)
        -   [Typescript](./2021/day03/typescript/solution.ts) :star: :star:
    -   [x] [DayO4](./2021/day04/)
        -   [Typescript](./2021/day04/typescript/solution.ts) :star: :star:
    -   [x] [DayO5](./2021/day05/)
        -   [Typescript](./2021/day05/typescript/solution.ts) :star: :star:
    -   [x] [DayO6](./2021/day06/)
        -   [Typescript](./2021/day06/typescript/solution.ts) :star: :star:
    -   [x] [DayO7](./2021/day07/)
        -   [Typescript](./2021/day07/typescript/solution.ts) :star: :star:
    -   [x] [DayO8](./2021/day08/)
        -   [Typescript](./2021/day08/typescript/solution.ts) :star:
    -   [x] [DayO9](./2021/day09/)
        -   [Typescript](./2021/day09/typescript/solution.ts) :star: :star:
    -   [x] [Day10](./2021/day10/)
        -   [Typescript](./2021/day10/typescript/solution.ts) :star: :star:
    -   [x] [Day11](./2021/day11/)
        -   [Typescript](./2021/day11/typescript/solution.ts) :star: :star:
    -   [x] [Day12](./2021/day12/)
        -   [Typescript](./2021/day12/typescript/solution.ts) :star: :star:
-   [ ] 2018
    -   [x] [Day01](./2018/day01)
        -   [Python](./2018/day01/python) :star: :star:
    -   [x] [Day02](./2018/day02)
        -   [Python](./2018/day02/python/) :star: :star:
    -   [x] [Day03](./2018/day03)
        -   [Python](./2018/day03/python/) :star: :star:
    -   [ ] [Day04](./2018/day04)
        -   [Python](./2018/day04/python/)
    -   [x] [Day05](./2018/day05)
        -   [Python](./2018/day05/python/) :star: :star:
    -   [x] [Day06](./2018/day06)
        -   [Python](./2018/day06/python/) :star: :star:
    -   [ ] [Day07](./2018/day07)
        -   [Python](./2018/day07/python/) :star:
-   [ ] 2016
    -   [x] Day01
        -   [Typescript](./2016/day01/typescript/solution.ts) :star: :star:
        -   [Rust](./2016/day01/rust/src/main.rs) :star: :star:
        -   [Python](./2016/day01/python/solution.py) :star: :star:
