
//weight in kg, height in metres

let bmiCalc = (myWeight, myHeight) => {
    let bmi = (myWeight/(myHeight**2)).toFixed(2);
    if(bmi < 18.5){
        return `Your BMI is ${bmi}. You are underweight.`;
    } else if(bmi >= 18.5 && bmi <= 29.9){
        return `Your BMI is ${bmi}. You are in the healthy weight range.`;
    } else if(bmi >= 30 && bmi <=40){
        return `Your BMI is ${bmi}. You are overweight.`;
    } else {
        return "get some help";
    }
}

console.log(bmiCalc(75,1.86));