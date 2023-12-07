export enum Type {
    HighCard,
    OnePair,
    TwoPair,
    ThreeOfAKind,
    FullHouse,
    FourOfAKind,
    FiveOfAKind,
}
type Hand = {
    raw: string;
    type: Type;
    bid: number;
}
export const handType = (hand: string): Type => {
    const counts: { [key: string]: number } = {};


    for (let card of hand) {
        if (counts[card]) {
            counts[card] += 1;
        } else {
            counts[card] = 1;
        }
    }


    let threeKind = false;
    let pair = false;

    // check 4 or 5 of a kind
    for (let card in counts) {
        if (counts[card] === 5) {
            return Type.FiveOfAKind;
        }
        if (counts[card] === 4) {
            return Type.FourOfAKind;
        }
        if (counts[card] === 3) {
            if (pair) {
                return Type.FullHouse;
            }
            threeKind = true;
            continue;
        }
        if (counts[card] === 2) {
            if (threeKind) {
                return Type.FullHouse;
            }
            if (pair) {
                return Type.TwoPair;
            }
            pair = true;
            continue;
        }
    }

    if (threeKind) return Type.ThreeOfAKind;
    if (pair) return Type.OnePair;
    return Type.HighCard;
}

export function sortHands(a: Hand, b: Hand): number {
    const cardStrengths = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    const strength = (card: string) => cardStrengths.indexOf(card);
    // handle cards of same rank (check first card)
    if (a.type === b.type) {
        for (let i = 0; i < a.raw.length; ++i) {
            let aStrength = strength(a.raw[i]);
            let bStrength = strength(b.raw[i]);
            if (aStrength === bStrength) continue;
            if (aStrength > bStrength) return 1;
            return -1;
        }
    }
    // handle rank difference
    if (a.type > b.type) return 1;
    return -1;
}

export function partOne(input: string) {
    let lines = input.trim().split(/\n\s*/g);
    let hands = lines.map(line => {
        const [cards, bid] = line.split(/\s/);
        return {
            raw: cards,
            type: handType(cards),
            bid: Number(bid),
        } as Hand
    })

    let sortedHands = hands.sort(sortHands);
    let totalWinnings = 0;

    for (let i = 0; i < sortedHands.length; ++i) {
        let hand = sortedHands[i];
        let rank = i + 1;
        totalWinnings += hand.bid * rank;
    }
    return totalWinnings;
}

export function partTwo(input: string) {
    let lines = input.trim().split(/\n\s*/g);
    let hands = lines.map(line => {
        const [cards, bid] = line.split(/\s/);
        return {
            raw: cards,
            type: handType2(cards),
            bid: Number(bid),
        } as Hand
    })

    let sortedHands = hands.sort(sortHands2);
    // console.log(sortedHands)
    let totalWinnings = 0;

    for (let i = 0; i < sortedHands.length; ++i) {
        let hand = sortedHands[i];
        let rank = i + 1;
        totalWinnings += hand.bid * rank;
    }
    return totalWinnings;
}
export function handType2(hand: string): Type {
    const counts: { [key: string]: number } = {};
    let jokers = 0;
    let maxCard: [string, number] = ["", 0];

    for (let card of hand) {
        if (card === "J") {
            jokers += 1;
            continue;
        }
        if (counts[card]) {
            counts[card] += 1;
        } else {
            counts[card] = 1;
        }
        if (counts[card] > maxCard[1]) {
            maxCard = [card, counts[card]]
        }
    }

    if (jokers === 5) {
        return Type.FiveOfAKind;
    }

    counts[maxCard[0]] += jokers;


    let threeKind = false;
    let pair = false;

    // check 4 or 5 of a kind
    for (let card in counts) {
        if (counts[card] === 5) {
            return Type.FiveOfAKind;
        }
        if (counts[card] === 4) {
            return Type.FourOfAKind;
        }
        if (counts[card] === 3) {
            if (pair) {
                return Type.FullHouse;
            }
            threeKind = true;
            continue;
        }
        if (counts[card] === 2) {
            if (threeKind) {
                return Type.FullHouse;
            }
            if (pair) {
                return Type.TwoPair;
            }
            pair = true;
            continue;
        }
    }

    if (threeKind) return Type.ThreeOfAKind;
    if (pair) return Type.OnePair;
    return Type.HighCard;
}


export function sortHands2(a: Hand, b: Hand): number {
    const cardStrengths = ['J', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'Q', 'K', 'A'];
    const strength = (card: string) => cardStrengths.indexOf(card);
    // handle cards of same rank (check first card)
    if (a.type === b.type) {
        for (let i = 0; i < a.raw.length; ++i) {
            let aStrength = strength(a.raw[i]);
            let bStrength = strength(b.raw[i]);
            if (aStrength === bStrength) continue;
            if (aStrength > bStrength) return 1;
            return -1;
        }
    }
    // handle rank difference
    if (a.type > b.type) return 1;
    return -1;
}
