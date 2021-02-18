// Challenge 2: Write your answers here
let newSection = document.querySelector("article").appendChild(document.createElement('section'));

//adds h2 and its text to the new section
newSection.appendChild(document.createElement("h2")).appendChild(document.createTextNode("What do I think of JS"));

//adds p and its text to the new section
newSection.appendChild(document.createElement("p")).appendChild(document.createTextNode("It's cool I guess"));

//add new list item to skill list
let skillList = document.getElementById("skills-list");
skillList.appendChild(document.createElement("li")).appendChild(document.createTextNode("Trying"));

//add new list item to education list
let educationList = document.getElementById("education-list");
educationList.appendChild(document.createElement("li")).appendChild(document.createTextNode("Extra Stuff"));

//adding rows and columns to a table
let employmentTable = document.getElementById("employment-table");
let newRow = employmentTable.insertRow(0);
newRow.insertCell(0).appendChild(document.createTextNode("Trying"));
newRow.insertCell(1).appendChild(document.createTextNode("My Best"));
newRow.insertCell(2).appendChild(document.createTextNode("2020 - Current"));

//add new images to skill images
let skillImages = document.getElementById("skill-images");
skillImages.appendChild(document.createElement("img")).src="https://storage.needpix.com/rsynced_images/ninja-296448_1280.png";
