let getFinalPrice = (price, taxPercent) => {
    if(taxPercent === 0){
        return price;
    } else if(taxPercent < 0){
        return "Please provide a valid number of tax percentage";
    } else{
        return price * ((taxPercent/100)+1);
    }
}

console.log(getFinalPrice(50,6));
console.log(getFinalPrice(25,10));
console.log(getFinalPrice(100,6));
console.log(getFinalPrice(50,0));
console.log(getFinalPrice(50,-5));
