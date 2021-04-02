
function WorldSwimmingRecord(input) {
    let rekord = Number(input[0]);
    let distance= Number(input[1]);
    let vreme=Number(input[2]);
    let vremeob=distance*vreme;
    let zabaviane=Math.floor(distance/15)*12.5;
    let vremetotal=vremeob+zabaviane;
    if (vremetotal>=rekord){
        console.log(`No, he failed! He was ${(vremetotal-rekord).toFixed(2)} seconds slower.`);
     } else {
        console.log(`Yes, he succeeded! The new world record is ${(vremetotal).toFixed(2)} seconds.`);
    }
}

