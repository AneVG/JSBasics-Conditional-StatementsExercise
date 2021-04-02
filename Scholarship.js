
function Scholarship(input) {
    let dohodvleva =  Number(input[0]);
    let sredenuspeh= Number(input[1]);
    let mrzaplata= Number(input[2]);
    let sumsocialna=Math.floor(mrzaplata*0.35);
    let sumuspeh=Math.floor(sredenuspeh*25);
    let pravosocialna=(dohodvleva<mrzaplata)&&(sredenuspeh>4.50);
    let pravostuspeh=(sredenuspeh>=5.50);
    if (pravosocialna&&pravostuspeh){
         if (sumsocialna>sumuspeh){
             console.log(`You get a Social scholarship ${sumsocialna} BGN`)
       }
        else{ 
             console.log(`You get a scholarship for excellent results ${sumuspeh} BGN`)}
      }
        if(pravosocialna&&(!(pravostuspeh))){
            console.log(`You get a Social scholarship ${sumsocialna} BGN`)
      }
        if(pravostuspeh&&(!(pravosocialna))){
            console.log(`You get a scholarship for excellent results ${sumuspeh} BGN`)
      }
        if(!(pravostuspeh)&&(!(pravosocialna))){
            console.log("You cannot get a scholarship!")
   }
       
}
