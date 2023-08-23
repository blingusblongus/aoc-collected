use std::fs;

fn main() {
    let input = fs::read_to_string("../../input").expect("Should read value");

    part_one(&input);
}

fn part_one(input: &str) -> Option<i32> {
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
    fn test_part_one(#[case] input: &str, #[case] expected: Option<i32>) {
        assert_eq!(expected, part_one(input))
    }
}
