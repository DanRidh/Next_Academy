//RAT = Right Angled Triangle
let makeRAT = (num) => {
    let triangle = "";

    for(let i=1; i<=num; i++){
        triangle += ("*".repeat(i));
        triangle += "\n";
    }
    console.log(triangle);
}

//FRAT = Flipped Right Angled Triangle
let makeFRAT = (num) => {
    let triangle = "";

    for(let i=1; i<=num; i++){
        triangle += (" ".repeat(num-i));
        triangle += ("*".repeat(i));
        triangle += "\n";
    }
    console.log(triangle);
}

//P = Pyramid
let makeP = (num) => {
    let triangle = "";

    for(let i=1; i<=num; i++){
        triangle += (" ".repeat(num-i));
        triangle += ("*".repeat((i*2)-1));
        triangle += (" ".repeat(num-i));
        triangle += "\n";
    }
    console.log(triangle);
}

//D = Diamond
let makeD = (num) => {
    let diamond = "";
    let middle = Math.floor((num/2)+1);
    
    for(let i=1; i<=num; i++){
        spaceMultiplier = Math.abs((num-((i*2)-1))/2);
        topHalfMultiplier = (i*2)-1;
        bottomHalfMultiplier = ((num-i)*2)+1;
        
        if(i <= middle){
            diamond += (" ".repeat(spaceMultiplier));
            diamond += ("*".repeat(topHalfMultiplier));
            diamond += (" ".repeat(spaceMultiplier));
            diamond += "\n";
        } else{
            diamond += (" ".repeat(spaceMultiplier));
            diamond += ("*".repeat(bottomHalfMultiplier));
            diamond += (" ".repeat(spaceMultiplier));
            diamond += "\n";
        }
    }
    console.log(diamond);
}
//HD = Hollow Diamond
let makeHD = (num) => {
    let diamond = "";
    let middle = Math.floor((num/2)+1);
    
    for(let i=1; i<=num; i++){
        spaceMultiplier = Math.abs((num-((i*2)-1))/2);

        topHalfMultiplier = (i*2)-1;
        topHollowMultiplier = Math.max(0,topHalfMultiplier-2);

        bottomHalfMultiplier = ((num-i)*2)+1;
        bottomHollowMultiplier = Math.max(0,bottomHalfMultiplier-2);

        if(i <= middle){
            diamond += (" ".repeat(spaceMultiplier));
            diamond += ("*");
            diamond += (" ".repeat(topHollowMultiplier));
            diamond += ("*".repeat(topHalfMultiplier-topHollowMultiplier-1));
            diamond += (" ".repeat(spaceMultiplier));
            diamond += "\n";
        } else{
            diamond += (" ".repeat(spaceMultiplier));
            diamond += ("*");
            diamond += (" ".repeat(bottomHollowMultiplier));
            diamond += ("*".repeat(bottomHalfMultiplier-bottomHollowMultiplier-1));
            diamond += (" ".repeat(spaceMultiplier));
            diamond += "\n";
        }
    }
    console.log(diamond);
}


makeRAT(4);
makeFRAT(4);
makeP(4);
makeD(9);
makeHD(9);