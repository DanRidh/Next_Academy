let fizzBuzz = () => {
    let input = parseInt(window.prompt("Enter a number between 1 & 100"));
    
    if(isNaN(input)){
        alert("Please enter a NUMBER");
        fizzBuzz();
    } else if(input < 1){
        alert("Number too low");
        fizzBuzz();
    } else if(input > 100){
        alert("Number too high");
        fizzBuzz();
    } else{
        if(input % 3 === 0 && input % 5 === 0){
            alert("FizzBuzz");
        } else if(input % 3 === 0){
            alert("Fizz");
        } else if(input % 5 === 0){
            alert("Buzz");
        } else{
            alert(`Number is: ${input}`);
        }
    } 
}

fizzBuzz();
