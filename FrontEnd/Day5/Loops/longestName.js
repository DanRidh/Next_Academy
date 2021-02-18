const names = ['Nicholas', 'Kevin', 'Audrey', 'KJ', 'Delilah', 'Josh'];

let greet = (name) => document.write(`Hello, ${name}! <br>`);

let longestName = (arr) => {
    let arrLengths = arr.map(name => name.length);      //creates an array of lengths
    let longest = Math.max(...arrLengths);              //finds the longest lenght and set to a variable
    let longestIndex = arrLengths.indexOf(longest);     //finds index of the word with longest length
    document.write(`<hr> Longest name is: ${arr[longestIndex]}`);
}

//with while loop
let i = 0
while (i < names.length) {
    greet(names[i]);
    i++;
    };

/*
//with for loop
for(let i=0; i<names.length; i++){
    greet(names[i]);
}
*/

longestName(names);