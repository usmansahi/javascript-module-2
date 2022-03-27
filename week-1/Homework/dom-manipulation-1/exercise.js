
/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

var paragraph =document.querySelectorAll('p');

console.log(paragraph)
const ArrayElement = Array.from(paragraph)

console.log(ArrayElement)

const firstdiv =document.querySelector('.site-header')
console.log(firstdiv)

const jumotronText = document.querySelector('jumbotron-text');
console.log(jumotronText)
const primaryContent = document.querySelector(".primary-content");
console.log(primaryContent)


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

document.querySelector("#alertBtn").addEventListener("click", alertMessage);
function alertMessage() {

    alert("Thanks for visiting Bikes for Refugees!");
}
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const bodyCol = document.querySelector("body");
const changeColorButton = document.querySelector("#bgrChangeBtn");
changeColorButton.addEventListener("click", () => {
  bodyCol.style.backgroundColor = "aquamarine";
});
    /*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
const addSomeTextButton = document.querySelector("#addTextBtn");
const mainArticles = document.querySelector("#mainArticles");
addSomeTextButton.addEventListener("click", () => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = " new paragraph for question 4";
  mainArticles.appendChild(newParagraph);
});

    /*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const LargerLink = document.querySelector("#largerLinksBtn");
LargerLink.addEventListener("click",() =>{
    const  links = document.querySelectorAll('a');
    Array.from(links).forEach(link =>{
        link.style.fontSize = "3rem"
    });
});

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
const selectAddButton = document.querySelector("#addArticleBtn");
const selectInput = document.querySelector("input");

selectAddButton.addEventListener("click", () => {
  const newParagraphHere = document.createElement("p");
  newParagraphHere.textContent = selectInput.value;
  mainArticles.appendChild(newParagraphHere);
  selectInput.value = "";
});

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

let arrayOfColors = ["#E41", "#8AA", "#8AE5D4", "#EDB0", "#EFF4A5"];
let colorIndex = 0;
changeColorButton.addEventListener("click", () => {
  bodyCol.style.backgroundColor = arrayOfColors[colorIndex];
  colorIndex = (colorIndex + 1) % arrayOfColors.length;
});