document.getElementById("dataTab").addEventListener("mouseover", mouseOverData);
document.getElementById("dataTab").addEventListener("mouseout", mouseOutData);
document.getElementById("actionTab").addEventListener("mouseover", mouseOverAction);
document.getElementById("actionTab").addEventListener("mouseout", mouseOutAction);
document.getElementById("exTab").addEventListener("mouseover", mouseOverEx);
document.getElementById("exTab").addEventListener("mouseout", mouseOutEx);
document.getElementById("aboutTab").addEventListener("mouseover", mouseOverAbout);
document.getElementById("aboutTab").addEventListener("mouseout", mouseOutAbout);

function mouseOverData() {
  document.getElementById("dataTab").innerHTML = "data.exe";
}

function mouseOutData() {
  document.getElementById("dataTab").innerHTML = "Data";
}

function mouseOverAction() {
  document.getElementById("actionTab").innerHTML = "take_action.jpg";
}

function mouseOutAction() {
  document.getElementById("actionTab").innerHTML = "Take Action";
}

function mouseOverEx() {
  document.getElementById("exTab").innerHTML = "stem_experiences.js";
}

function mouseOutEx() {
  document.getElementById("exTab").innerHTML = "STEM Experiences";
}

function mouseOverAbout() {
  document.getElementById("aboutTab").innerHTML = "about_us.png";
}

function mouseOutAbout() {
  document.getElementById("aboutTab").innerHTML = "About Us";
}

//let slideIndex = 0;
//showSlides();

//function showSlides() {
 // let i;
  //let slides = document.getElementsByClassName("mySlides");
  //let dots = document.getElementsByClassName("dot");
 // for (i = 0; i < slides.length; i++) {
    //slides[i].style.display = "none";  
  //}
  //slideIndex++;
  //if (slideIndex > slides.length) {slideIndex = 1}    
  //for (i = 0; i < dots.length; i++) {
    //dots[i].className = dots[i].className.replace(" active", "");
  //}
  //slides[slideIndex-1].style.display = "block";  
  //dots[slideIndex-1].className += " active";
  //setTimeout(showSlides, 2000); // Change image every 2 seconds
//}

//!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();

//!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}(); (data visualizations code)