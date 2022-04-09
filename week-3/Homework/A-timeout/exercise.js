/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)
*/
const timeout = setTimeout(colorchange , 5000);
function colorchange(){
    document.getElementById("main");
    document.body.style.backgroundColor ="#ff99bb";
}



/*
Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/
var i = 0;
const elemet = document.getElementById("main");
function changecolordif(){

    const color = ["#00ace6","#00cc99","#c299ff"];
    document.body.style.backgroundColor= color[i];
    i = (i +1) % color.length;
}
setInterval(changecolordif , 5000);
