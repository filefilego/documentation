let fs = require("fs")

let emission = Number(15);
let total_day = [],
    total_coins = []

let totalsupply = 500000000
let minedCons = 0
for (let i = 1; i <= 20; i++) {
    if (i % 1 == 0) {
        emission = emission / 2.0
        console.log("emission" , emission, " year ", i)
    }

    let coinsYear = ( emission * 6 * 60 * 24 * 365);
    console.log("coins year ", i, coinsYear, " supply: ", totalsupply)
    minedCons+= coinsYear
    totalsupply -= minedCons
    if(totalsupply < 0) {
        console.log("Supply below zeroo at years ", i , totalsupply )
        break;
    }
    
    total_day.push(i);
    total_coins.push(totalsupply);
}

let result = {
    coinsperday: total_coins,
    days: total_day
}

fs.writeFileSync("result.json", JSON.stringify(result))