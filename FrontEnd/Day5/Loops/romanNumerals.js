//strategy1
/*
let romanNumeralsCalc = () => {
    const romanNumerals = ["I","IV","V", "IX", "X", "XL","L","XC","C","CD","D","CM","M"];
    const values = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
    let romanNum = "";

    let input = parseInt(window.prompt(`Give a number to romanize:`));
    let total = input;
    if(isNaN(input)){
        alert(`I asked for a number, not gibberish!`);
    } else if(typeof input !== 'number'){
        alert(`I asked for a number, not gibberish!`);
    } else{
        for(let i=values.length-1; i>=0; i--){
            while(total >= values[i]){
                romanNum += romanNumerals[i]
                total -= values[i];
            }
        }
        alert(`${input} should generate ${romanNum}.`);
    }
}
*/

//strategy2
/*
let romanNumeralsCalc = () => {
    const romanNumerals = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
      };
      let romanNum = "";

      let input = parseInt(window.prompt(`Give a number to romanize:`));
      let total = input;
      if(isNaN(input)){
        alert(`I asked for a number, not gibberish!`);
    } else if(typeof input !== 'number'){
        alert(`I asked for a number, not gibberish!`);
    } else{
        for(let i in romanNumerals){
            while(total >= romanNumerals[i]){
                romanNum += i;
                total -= romanNumerals[i];
            }
        }
        alert(`${input} should generate ${romanNum}.`);
    }
}
*/

//strategy4
let romanNumeralsCalc = () => {
    const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNum = "";

    let input = parseInt(window.prompt(`Give a number to romanize:`));
    let total = input;
    if(isNaN(input)){
        alert(`I asked for a number, not gibberish!`);
    } else if(typeof input !== 'number'){
        alert(`I asked for a number, not gibberish!`);
    } else{
        for(let i=0; i<romanNumerals.length; i++){
            if(total >= values[i]){
                let multiplier = total / values[i];
                romanNum += (romanNumerals[i].repeat(multiplier));
                total %= values[i];
            }
        } 
        alert(`${input} should generate ${romanNum}.`);
    }
}

romanNumeralsCalc();