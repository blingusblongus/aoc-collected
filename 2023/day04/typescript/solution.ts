export function partOne(input: string) {
    const cards = input.trim().split(/\n\s*/g);
    let total = 0;

    for (let card of cards) {
        let count = scoreCard(card)

        if (count > 0) {
            total += partOneScoring(count);
        }
    }

    return total
}

export function partOneScoring(count: number) {
    return count ? 1 * 2 ** (count - 1) : 0;
}

export function scoreCard(card: string): number {
    const [winningStr, yourStr] = card.split(": ")[1].split("| ");
    const winningNums = winningStr.match(/\d+/g)
    const yourNums = yourStr.match(/\d+/g)

    if (!yourNums || !winningNums) {
        throw new Error("problem parsing yournums from card:" + card)
    }
    let count = 0;
    for (let num of yourNums) {
        if (winningNums.includes(num)) {
            count++
        }
    }

    return count;
}

export function partTwo(input: string) {
    const cards = input.trim().split(/\n\s*/g).map(content => ({ copies: 1, content }));

    for (let i = 0; i < cards.length; ++i) {
        const card = cards[i];
        const count = scoreCard(card.content);

        for (let j = i + 1; j < i + 1 + count; ++j) {
            cards[j].copies += cards[i].copies;
        }
    }
    return cards.reduce((sum, card) => sum += card.copies, 0);
}
