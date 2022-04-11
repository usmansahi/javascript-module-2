// Write your code here

var images = ['1.png','2.png','4.jpeg'];

var bckbtn=document.getElementById("backbutton");
bckbtn.addEventListener("click", backfunction);

let forwardbtn = document.getElementById("forwardbutton");
forwardbtn.addEventListener('click' , forwardfunction);










function forwardFun(){
var imgcontainer = document.querySelector('.slider-img').src ;
var imgindex = images.indexOf(imgcontainer);
console.log(imgindex)

}

function backwardFun(){

}