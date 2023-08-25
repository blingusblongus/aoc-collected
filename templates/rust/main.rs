use std::fs;

fn main() {
    let input = fs::read_to_string("../input").expect("Should read value");

    println!("part_one:{:?}", part_one(&input));
    println!("part_two{:?}", part_two(&input));
}

fn part_one(input: &str) -> Option<u32> {
    return None;
}

fn part_two(input: &str) -> Option<u32> {
    return None;
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
