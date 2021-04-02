
function BonusScore(input) {
    let b1 = Number(input[0]);
    let bonus = 0.0
    if (b1 <= 100) {
        bonus = 5;
    } else if (b1 >= 1000) {
        bonus = b1 * 0.10;
    } else {
        bonus = b1 * 0.20;
    }
    if (b1 % 2 == 0) {
        bonus += 1;
    } else if (b1 % 10 == 5) {
        bonus += 2;
    }
    console.log(bonus);
    console.log(b1 + bonus);
}
