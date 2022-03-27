
/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
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
 const changeColor = document.querySelector("#bgrChangeBtn");
    changeColor.addEventListener("click", function(){
        document.body.style.backgroundColor = "lightgray";
    });  
    /*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
const AddText = document.querySelector("#addTextBtn");
   AddText.addEventListener("click",function (){
    console.log("learn more");
    });

    /*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const LargerLink = document.querySelector("#largerLinksBtn");
LargerLink.addEventListener("click",() =>{
    LargerLink.target.text()
});