
function Time15Minutes(input) {
    let old_hour = Number(input[0]);
    let old_min = Number(input[1]);
    let new_min = old_min + 15;
    let new_hour = old_hour;
    if (new_min > 59) {
        new_min = new_min - 60;
        new_hour = new_hour + 1;
    }
    if (new_hour == 24) {
        new_hour = 0;
    }
    if (new_min < 10) {
        console.log(`${(new_hour)}:0${(new_min)}`);
    }
    else {
        console.log(`${(new_hour)}:${(new_min)}`);
    }
}