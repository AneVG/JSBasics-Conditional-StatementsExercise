
function metricConvert(input) {
    let score = Number(input[0]);
    let vhmed = input[1];
    let izmed = input[2];
    if (vhmed === 'mm') {
        if (izmed === 'mm') {
            console.log(score.toFixed(3))
        } else if (izmed === 'cm') {
            console.log((score / 10).toFixed(3))
        } else if (izmed === 'm') {
            console.log((score / 1000).toFixed(3))
        }
    }
    else if (vhmed === 'cm') {
        if (izmed === 'mm') {
            console.log((score * 10).toFixed(3))
        } else if (izmed === 'cm') {
            console.log((score).toFixed(3))
        } else if (izmed === 'm') {
            console.log((score / 100).toFixed(3))
        }
    }
    else if (vhmed === 'm') {
        if (izmed === 'mm') {
            console.log((score * 1000).toFixed(3))
        } else if (izmed === 'cm') {
            console.log((score * 100).toFixed(3))
        } else if (izmed === 'm') {
            console.log((score).toFixed(3))
        }
    }
}
