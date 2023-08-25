export function partOne(input: string) {
    let matches = input
        .trim()
        .split(/\n+/g)
        .map((match) => match.split(/\s/g));

    let choiceThem = ["A", "B", "C"];
    let choiceYou = ["X", "Y", "Z"];

    let scores: number[] = [];
    for (let match of matches) {
        let score = 0;
        const [them, you] = match;

        const iThem = choiceThem.indexOf(them);
        const iYou = choiceYou.indexOf(you);

        switch (iThem - iYou) {
            case 1:
            case -2:
                //lose
                score = iYou + 1;
                break;
            case 0:
                //draw
                score = iYou + 1 + 3;
                break;
            case -1:
            case 2:
                //win
                score = iYou + 1 + 6;
                break;
        }

        scores.push(score);
    }

    return scores.reduce((sum, score) => (sum += score), 0);
}

export function partTwo(input: string) {
    let matches = input
        .trim()
        .split(/\n+/g)
        .map((match) => match.split(/\s/g));

    let choiceThem = ["A", "B", "C"];

    let scores: number[] = [];
    for (let match of matches) {
        let score = 0;
        const [them, desiredResult] = match;

        const iThem = choiceThem.indexOf(them);

        switch (desiredResult) {
            case "X":
                //lose
                score = iThem == 0 ? 3 : iThem;
                break;
            case "Y":
                //draw
                score = iThem + 1 + 3;
                break;
            case "Z":
                score = iThem == 2 ? 7 : iThem + 8;
                break;
        }

        scores.push(score);
    }

    return scores.reduce((sum, score) => (sum += score), 0);
}
