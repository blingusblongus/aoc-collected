mod position;

use position::{Direction, Pos, Step, Turn};
use std::collections::HashSet;
use std::fs;

fn main() {
    let input = fs::read_to_string("../input").expect("Should read value");

    println!("part_one:{:?}", part_one(&input));
    println!("part_two{:?}", part_two(&input));
}

fn part_one(input: &str) -> Option<u32> {
    let steps = get_steps(input);
    let mut position = Pos {
        x: 0,
        y: 0,
        direction: Direction::N,
    };

    for Step { turn, count } in steps {
        match turn {
            Turn::R => position.turn_right(),
            Turn::L => position.turn_left(),
        }
        match position.direction {
            Direction::N => position.go_north(count),
            Direction::S => position.go_south(count),
            Direction::E => position.go_east(count),
            Direction::W => position.go_west(count),
        }
    }

    let total_distance = position.x.abs() as u32 + position.y.abs() as u32;

    return Some(total_distance);
}

fn part_two(input: &str) -> Option<u32> {
    let mut visited = HashSet::new();
    visited.insert(Pos {
        x: 0,
        y: 0,
        direction: Direction::N,
    });
    let steps = get_steps(input);
    let mut position = Pos {
        x: 0,
        y: 0,
        direction: Direction::N,
    };

    for Step { turn, count } in steps {
        match turn {
            Turn::R => position.turn_right(),
            Turn::L => position.turn_left(),
        }

        for _ in 0..count {
            match position.direction {
                Direction::N => position.go_north(1),
                Direction::S => position.go_south(1),
                Direction::E => position.go_east(1),
                Direction::W => position.go_west(1),
            }

            if visited.contains(&position) {
                let total_distance = position.x.abs() as u32 + position.y.abs() as u32;
                return Some(total_distance);
            }

            visited.insert(position.clone());
        }
    }

    return None;
}

fn get_steps(input: &str) -> Vec<Step> {
    input
        .trim()
        .split(", ")
        .filter_map(|step| {
            let (turn, count) = step.split_at(1);
            let turn = turn.chars().next()?;
            let count = count.parse::<u32>().unwrap();
            Some(Step {
                turn: parse_turn(turn),
                count,
            })
        })
        .collect()
}

fn parse_turn(ch: char) -> Turn {
    match ch {
        'R' => Turn::R,
        'L' => Turn::L,
        _ => panic!("Incorrect turn signifier"),
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use rstest::rstest;

    #[rstest]
    #[case("R2, L3", Some(5))]
    #[case("R2, R2, R2", Some(2))]
    #[case("R5, L5, R5, R3", Some(12))]
    fn test_part_one(#[case] input: &str, #[case] expected: Option<u32>) {
        assert_eq!(expected, part_one(input))
    }

    #[test]
    fn test_part_two() {
        assert_eq!(part_two("R8, R4, R4, R8"), Some(4));
    }
}
