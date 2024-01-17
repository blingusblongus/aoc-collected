use std::fs;

#[derive(Debug, Clone, Copy)]
enum Outcome {
    Win = 6,
    Lose = 0,
    Draw = 3,
}

#[derive(Debug, Clone, Copy)]
enum Hand {
    X = 1,
    Y = 2,
    Z = 3,
}

#[derive(Debug)]
enum OppHand { 
    A = 1,
    B = 2,
    C = 3,
}

impl Hand {
    fn value(self) -> u32 {
        self as u32
    }

    fn from_str(s: &str) -> Result<Self, &str> {
        match s {
            "X" => Ok(Hand::X),
            "Y" => Ok(Hand::Y),
            "Z" => Ok(Hand::Z),
            _ => Err("Invalid Hand")
        }
    }

    fn desired_outcome(self) -> Outcome {
        match self {
            Hand::X => Outcome::Lose,
            Hand::Y => Outcome::Draw,
            Hand::Z => Outcome::Win,
        }
    }
}

impl OppHand {
    fn from_str(s: &str) -> Result<Self, &str> {
        match s {
            "A" => Ok(OppHand::A),
            "B" => Ok(OppHand::B),
            "C" => Ok(OppHand::C),
            _ => Err("Invalid Hand")
        }
    }

    fn choose_response(self, &outcome: &Outcome) -> Hand {
        match outcome {
            Outcome::Win => match self {
                OppHand::A => Hand::Y,
                OppHand::B => Hand::Z,
                OppHand::C => Hand::X,
            },
            Outcome::Draw => match self {
                OppHand::A => Hand::X,
                OppHand::B => Hand::Y,
                OppHand::C => Hand::Z,
            },
            Outcome::Lose => match self {
                OppHand::A => Hand::Z,
                OppHand::B => Hand::X,
                OppHand::C => Hand::Y,
            },
        }
    }
}

impl Outcome {
    fn point_value(self) -> u32 {
        self as u32
    }
}

fn main() {
    let input = fs::read_to_string("../input").expect("Should read value");

    println!("part_one:{:?}", part_one(&input));
    println!("part_two{:?}", part_two(&input));
}

fn part_one(input: &str) -> u32 {
    let mut player_score = 0;
    for line in input.lines() {
        let hands: Vec<&str> = line.trim().split_whitespace().collect();

        if hands.len() != 2 {
            panic!("Improper number of hands.");
        }

        let (opponent_hand, your_hand) = (
            OppHand::from_str(hands[0]).expect("Bad OppHand"), 
            Hand::from_str(hands[1]).expect("Bad Hand")
            );

        player_score += score(opponent_hand, your_hand);
    }
    player_score
}

fn part_two(input: &str) -> u32 {
    let mut player_score = 0;
    for line in input.lines() {
        let hands: Vec<&str> = line.trim().split_whitespace().collect();

        if hands.len() != 2 {
            panic!("Improper number of hands.");
        }

        let (opponent_hand, your_hand) = (
            OppHand::from_str(hands[0]).expect("Bad OppHand"), 
            Hand::from_str(hands[1]).expect("Bad Hand")
            );

        let desired_outcome = your_hand.desired_outcome();
        let your_choice = opponent_hand.choose_response(&desired_outcome);
        println!("desired outcome: {:?}, your choice: {:?}", desired_outcome, your_choice);
        // println!("Current score = {}", player_score)
        player_score += your_choice.value();
        player_score += desired_outcome.point_value();
    }
    player_score
}

fn score(opp_hand: OppHand, your_hand: Hand) -> u32 {
    // println!("{:?} vs {:?}", opp_hand, your_hand);

    let outcome = match (opp_hand, your_hand) {
        (OppHand::A, Hand::Y) => Outcome::Win,
        (OppHand::B, Hand::Z) => Outcome::Win,
        (OppHand::C, Hand::X) => Outcome::Win,
        (OppHand::A, Hand::X) => Outcome::Draw,
        (OppHand::B, Hand::Y) => Outcome::Draw,
        (OppHand::C, Hand::Z) => Outcome::Draw,
        _ => Outcome::Lose,
    };


    let hand_value = match your_hand {
        Hand::Y => Hand::Y.value(),
        Hand::X => Hand::X.value(),
        Hand::Z => Hand::Z.value(),
    };



    let win_value = match outcome {
        Outcome::Win => 6,
        Outcome::Draw => 3,
        Outcome::Lose => 0,
    };
    // println!("{hand_value}, {win_value}");
    
    hand_value + win_value
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::fs;

    #[test]
    fn test_score() {
        assert_eq!(score(OppHand::A, Hand::Y), 8);
        assert_eq!(score(OppHand::B, Hand::X), 1);
        assert_eq!(score(OppHand::C, Hand::Z), 6);
    }

    const TEST_INPUT: &str = r#"A Y
B X
C Z"#;

    #[test]
    fn test_part_one_example() {
        assert_eq!(part_one(&TEST_INPUT), 15);
    }

    #[test]
    fn test_part_one_answer() {
        let input = fs::read_to_string("../input").expect("should read from file");

        assert_eq!(part_one(&input), 14297);
    }

    #[test]
    fn test_part_two_example() {
        assert_eq!(part_two(&TEST_INPUT), 12);
    }

    #[test]
    fn test_part_two_answer() {
        let input = fs::read_to_string("../input").expect("should read from file");

        assert_eq!(part_two(&input), 10498);
    }
}
