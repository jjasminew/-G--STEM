//making the tabs interactive (hover effect for tabs)
document.getElementById("dataTab").addEventListener("mouseover", mouseOverData);
document.getElementById("dataTab").addEventListener("mouseout", mouseOutData);
document.getElementById("resourceTab").addEventListener("mouseover", mouseOverResource);
document.getElementById("resourceTab").addEventListener("mouseout", mouseOutResource);
document.getElementById("actionTab").addEventListener("mouseover", mouseOverAction);
document.getElementById("actionTab").addEventListener("mouseout", mouseOutAction);
document.getElementById("exTab").addEventListener("mouseover", mouseOverEx);
document.getElementById("exTab").addEventListener("mouseout", mouseOutEx);
document.getElementById("aboutTab").addEventListener("mouseover", mouseOverAbout);
document.getElementById("aboutTab").addEventListener("mouseout", mouseOutAbout);

//what our tabs will change to
function mouseOverData() {
  document.getElementById("dataTab").innerHTML = "data.exe";
}

function mouseOutData() {
  document.getElementById("dataTab").innerHTML = "Data";
}

function mouseOverResource() {
  document.getElementById("resourceTab").innerHTML = "resources.html";
}

function mouseOutResource() {
  document.getElementById("resourceTab").innerHTML = "Resources";
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

//making the data visualizations interactive and hoverable
!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}()

//first draft of creating new interactive features
/* function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
} */