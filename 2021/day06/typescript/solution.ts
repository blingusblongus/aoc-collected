export function partOne(input: string) {
    return modelFish(input, 80);
}

export function partTwo(input: string) {
    return modelFish(input, 256);
}

function modelFish(input: string, duration: number) {
    const startFish = input.split(",").map((el) => parseInt(el));

    let fish = {};
    let nextFish = {};
    const days = duration;

    // init empty fish table
    zeroTable(fish);

    //fill initial fish table
    for (let f of startFish) {
        fish[f] += 1;
    }

    // console.log("startFish", fish);

    //step through a day
    for (let i = 0; i < days; i++) {
        //reset nextfish
        nextFish = zeroTable(nextFish);

        for (let timer in fish) {
            if (timer === "0") {
                nextFish[8] += fish[0];
                nextFish[6] += fish[0];
            } else {
                nextFish[parseInt(timer) - 1] += fish[timer];
            }
        }

        //write nextfish to fish
        copyTable(fish, nextFish);
    }

    // console.log("endFish", fish);
    return sumObjValues(fish);
}

function zeroTable(table) {
    //init table
    for (let i = 0; i < 9; i++) {
        table[i] = 0;
    }

    return table;
}

function copyTable(table1, table2) {
    for (let i = 0; i < 9; i++) {
        table1[i] = table2[i];
    }
}

function sumObjValues(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}
