//script for shrinking header 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.fontSize = "20px";
    document.getElementById("sub").style.fontSize = "10px";
    //add subtitle that also shrinks here 
  } else {
    document.getElementById("header").style.fontSize = "35px";
    document.getElementById("sub").style.fontSize = "15px";
  }
}

//Need to add more js functionality ~~ 

//I'll be adding more js soon so the structure will be worked on