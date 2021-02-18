const missedLimit = 10;
let hoverCounter = 0;

let elusiveButton = document.getElementById("elusiveButton");
let userAlert = document.getElementById("userAlert");
let missedCounter = document.getElementById("missedCount");

let randomColor = () => "#" + Math.floor(Math.random()*16777215).toString(16);
let randomHeight = () => Math.random() * (window.innerHeight - 100) + "px";
let randomWidth = () => Math.random() * (window.innerWidth - 100) + "px";

elusiveButton.onclick = () => {
    window.open("https://www.youtube.com/watch?v=oHg5SJYRHA0");
}

elusiveButton.onmouseover = (e) => {
    if(hoverCounter === missedLimit){
        hoverCounter++;
        userAlert.append(" Aight you suck imma stop moving now lmao")
    } else if(hoverCounter < missedLimit){
        hoverCounter++;
        elusiveButton.style.backgroundColor = randomColor();
        elusiveButton.style.color = randomColor();
        elusiveButton.style.top = randomHeight();
        elusiveButton.style.left = randomWidth();
        missedCounter.innerHTML = hoverCounter;
    }
}