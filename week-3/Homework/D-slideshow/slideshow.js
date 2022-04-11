let imageArray = [
  "https://doggyzworldkennel.com/wp-content/uploads/2020/12/Yellow-Lab-Puppy.jpg",
  "https://patchpuppy.com/wp-content/uploads/2021/10/HowtoTrainan8weekoldLabradorPuppy.jpg",
  "https://patchpuppy.com/wp-content/uploads/2021/10/Feature-11.jpg",
  "https://cdn.shopify.com/s/files/1/0272/4770/6214/articles/when-do-puppies-start-walking_800x800.jpg?v=1593020034"
];
var farwordbtn = document.getElementById("forwardbtn");
farwordbtn.addEventListener("click", forwardFunction);

var bckbtn = document.getElementById("backwardbtn");
bckbtn.addEventListener("click", backwardFunction);

function forwardFunction() {
  var imagecontainer = document.getElementById("imageHeading").src;
  var indexNum = imageArray.indexOf(imagecontainer);
  console.log(indexNum);
  if (indexNum >= 3) {
    indexNum = 0;
  } else {
    indexNum++;
  }
  var imgChange = document.getElementById("imageHeading");
  imgChange.src = imageArray[indexNum];
}

function backwardFunction() {
  var imgCntin = document.getElementById("imageHeading").src;
  var indexNum = imageArray.indexOf(imgCntin);
  console.log(indexNum);
  if (indexNum <= 0) {
    indexNum = 3;
  } else {
    indexNum--;
  }
  var imgChange = document.getElementById("imageHeading");
  imgChange.src = imageArray[indexNum];
}


var delayTimer = document.getElementById("delay").value;
if (delayTimer === ""){
    delayTimer = 1000;
}else{
    delayTimer = parseInt(delayTimer)
}

var autoForBt = document.getElementById("autoForwardbtn");
autoForBt.addEventListener("click", autoForwardFun);

function autoForwardFun() {
  var i = 0;
  function counter() {
    if (i > 3) {
      clearInterval(id);
    } else {
      let imgChange = document.getElementById("imageHeading");
      imgChange.src = imageArray[i];
      i++;
    }
  }
  //new
  var delayTimer = document.getElementById("delay").value;
if (delayTimer === ""){
    delayTimer = 1000;
}else{
    delayTimer = parseInt(delayTimer) * 1000
}
  var id = setInterval(counter, delayTimer);
}

var autoBckBt = document.getElementById("autoBackwardbtn");
autoBckBt.addEventListener("click", autoBackwardFun);

function autoBackwardFun() {
  var i = 3;
  function counter() {
    if (i < 0) {
      clearInterval(id);
    } else {
      let imgChange = document.getElementById("imageHeading");
      imgChange.src = imageArray[i];
      i--;
    }
  }
  var delayTimer = document.getElementById("delay").value;
if (delayTimer === ""){
    delayTimer = 1000;
}else{
    delayTimer = parseInt(delayTimer) * 1000
}
  var id = setInterval(counter, delayTimer);
}