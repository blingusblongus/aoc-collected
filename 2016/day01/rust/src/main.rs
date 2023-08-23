use std::fs;

struct Step {
    turn: Turn,
    count: u32,
}

#[derive(Debug)]
enum Turn {
    R,
    L,
}

#[derive(Debug)]
enum Direction {
    N,
    S,
    E,
    W,
}

#[derive(Debug)]
struct Pos {
    x: i32,
    y: i32,
    direction: Direction,
}

impl Pos {
    fn go_north(&mut self, distance: u32) {
        self.y += distance as i32;
    }

    fn go_east(&mut self, distance: u32) {
        self.x += distance as i32;
    }

    fn go_west(&mut self, distance: u32) {
        self.x -= distance as i32;
    }

    fn go_south(&mut self, distance: u32) {
        self.y -= distance as i32;
    }
    fn turn_right(&mut self) {
        match self.direction {
            Direction::N => self.direction = Direction::E,
            Direction::S => self.direction = Direction::W,
            Direction::E => self.direction = Direction::S,
            Direction::W => self.direction = Direction::N,
        };
    }
    fn turn_left(&mut self) {
        match self.direction {
            Direction::N => self.direction = Direction::W,
            Direction::S => self.direction = Direction::E,
            Direction::E => self.direction = Direction::N,
            Direction::W => self.direction = Direction::S,
        };
    }
}

fn main() {
    let input = fs::read_to_string("../input").expect("Should read value");

    println!("{:?}", part_one(&input));
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
        println!("{:?}, {}", turn, count);
        println!("{:?}", position);
    }

    println!("{:?}", position);

    let total_distance = position.x.abs() as u32 + position.y.abs() as u32;

    return Some(total_distance);
}

fn get_steps(input: &str) -> Vec<Step> {
    input
        .trim()
        .split(", ")
        .filter_map(|step| {
            let (turn, count) = step.split_at(1);
            let turn = turn.chars().next()?;
            println!("{}", count);
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
}
