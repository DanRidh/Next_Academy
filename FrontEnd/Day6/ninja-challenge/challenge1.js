// Challenge 1: Write your answers here
let bgChange = document.querySelector('body').style.backgroundColor="DarkCyan";

let headerBGImage = document.querySelector('header').style.backgroundImage="url('https://wallpaperaccess.com/full/2578748.jpg')";

let h2ColorChange = document.querySelectorAll("h2");
for(let i=0; i<h2ColorChange.length; i++){
    h2ColorChange[i].style.color="DarkCyan";
}

let myName = document.getElementById("name");
myName.innerHTML = "Danial Ridhwan";

let myDescription = document.getElementsByClassName("descriptions");
myDescription[0].innerHTML = "Trying to not die learning HTML/CSS/Javascript.";
myDescription[1].innerHTML = "I like the suffering from coding. <br /> You can't see me in class because of Covid. <br /> I spent most of my time trying to figure this out.";

let mySkills = document.getElementById("skills-list");
mySkills.innerHTML = "";
skills = ["Eating", "Sleeping", "Repeating"];

for(let skill of skills){
    let listItem = document.createElement("li");
    listItem.innerText = skill;
    mySkills.appendChild(listItem);
}


let myEducation = document.getElementById("education-list");
myEducation.innerHTML = "";
educations = ["Degree", "HighSchool", "Other Stuff"];

for(let education of educations){
    let listItem = document.createElement("li");
    listItem.innerText = education;
    myEducation.appendChild(listItem);
}


let myEmployment = document.getElementById("employment-table");
myEmployment.innerHTML = "";
employments = [
    ["Intern", "Digi", "2018 - 2019"],
    ["Intern", "OpenSys", "2018 - 2018"]
];

for(let employment of employments){
    let row = document.createElement("tr");
    for(let field of employment){
        let col = document.createElement("td");
        col.innerText = field;
        row.appendChild(col);
    }
    myEmployment.appendChild(row);
}