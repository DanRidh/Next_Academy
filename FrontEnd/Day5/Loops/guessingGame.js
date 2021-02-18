let game = () => {
    let randomNumber = Math.floor(Math.random() * 11);
    let answer = true;

    while(answer){
        let input = parseInt(window.prompt("Guess a number between 0 and 10:"));
        if(input === randomNumber){
            alert(`Congratulations! ${input} is the right number!`);
            answer = false;
        } else if(input < randomNumber){
            alert(`Number too small.`);   
        } else if(input > randomNumber){
            alert(`Number too big.`);
        } else {
            continue;
        }
    }
}