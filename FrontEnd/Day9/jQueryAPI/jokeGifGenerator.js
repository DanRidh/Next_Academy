let content = document.getElementById("content");

let gifButton = document.getElementById("gifButton");
let gifSearch = document.getElementById("gifSearch");
let randomGIF = document.getElementById("randomGIF");

let jokeButton = document.getElementById("jokeButton");
let quoteButton = document.getElementById("quoteButton");
let text = document.getElementById("text");


const APIKEY = "bpU5IcB1f3lIoAYBtgtzJx5qUnRYbwQt";

gifButton.addEventListener("click", () => {
    $.ajax({
        url: `http://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&tag=${gifSearch.value}`,
        method: "GET",
        success: function(res){
            console.log(res.data);
            randomGIF.src = res.data.image_original_url;
        },
        error: function(err){
            console.log(err);
        }
    })
})

jokeButton.addEventListener("click", () => {
    $.ajax({
        url: `https://api.chucknorris.io/jokes/random`,
        method: "GET",
        success: function(res){
            console.log(res);
            text.innerText = res.value;
        },
        error: function(err){
            console.log(err);
        }
    })
})

quoteButton.addEventListener("click", () => {
    $.ajax({
        url: `https://api.tronalddump.io/random/quote`,
        method: "GET",
        success: function(res){
            console.log(res);
            text.innerText = res.value;
        },
        error: function(err){
            console.log(err);
        }
    })
})