use std::fs;

fn main() {
    let input = fs::read_to_string("../input").expect("Should read value");

    println!("part_one:{:?}", part_one(&input));
    println!("part_two{:?}", part_two(&input));
}

fn part_one(input: &str) -> Option<u32> {
    let mut most_cals: u32 = 0;

    input.trim().split("\n\n").into_iter().for_each(|elf| {
        let mut cals: u32 = 0;

        elf.split("\n").for_each(|food| {
            cals += food
                .parse::<u32>()
                .expect("food should be a parseable number");

            if cals > most_cals {
                most_cals = cals;
            }
        })
    });
    return Some(most_cals);
}

fn part_two(input: &str) -> Option<u32> {
    let mut elves: Vec<u32> = vec![];
    let mut top_three_cals: u32 = 0;

    input.trim().split("\n\n").into_iter().for_each(|elf| {
        let mut cals: u32 = 0;

        elf.split("\n").for_each(|food| {
            cals += food
                .parse::<u32>()
                .expect("food should be a parseable number");
        });
        elves.push(cals);
    });

    elves.sort_by(|a, b| b.cmp(a));

    elves
        .into_iter()
        .take(3)
        .for_each(|cals| top_three_cals += cals);

    return Some(top_three_cals);
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::fs;

    const TEST_INPUT: &str = r#"1000
2000
3000

4000

5000
6000

7000
8000
9000

10000"#;

    #[test]
    fn test_part_one() {
        assert_eq!(part_one(&TEST_INPUT), Some(24000));
    }

    #[test]
    fn test_part_one_answer() {
        let input = fs::read_to_string("../input").expect("should read from file");

        assert_eq!(part_one(&input), Some(73211));
    }

    #[test]
    fn test_part_two() {
        assert_eq!(part_two(&TEST_INPUT), Some(45000));
    }

    #[test]
    fn test_part_two_answer() {
        let input = fs::read_to_string("../input").expect("should read from file");

        assert_eq!(part_two(&input), Some(213958));
    }
}
