
function GodzillaVsKong(input) {

    let budget = Number(input[0]);
    let statistcount = Number(input[1]);
    let clothesPrice = Number(input[2]);
    let dekorPrice = budget * 0.1;
    let praceforallstatis = clothesPrice * statistcount;
    if (statistcount > 150) {
        praceforallstatis = praceforallstatis * 0.9;
    }
    let total = praceforallstatis + dekorPrice;
    if (total > budget) {
        console.log("Not enough money!");

        console.log(`Wingard needs ${(total - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - total).toFixed(2)} leva left.`);

    }
}
