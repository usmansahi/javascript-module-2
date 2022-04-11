// Write your code here
var slider_img= document.querySelector('.slider-img');
var images = ['1.png','2.png'];
var i = 0;
function forward(){
    // alert("us")
    if(i <images.length -1){
        i++;
    }
	
   return setimages(); 
}
function back(){
   

    if(i <= 0) i = images.length;	
	i--;
    return setimages();
}   
function setimages(){
    return slider_img.setAttribute('src', "images/"+images[i]);
}