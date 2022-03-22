//script for shrinking header 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("header").style.fontSize = "20px";
    //add subtitle that also shrinks here 
  } else {
    document.getElementById("header").style.fontSize = "45px";
  }
}

//I'll be adding more js soon so the structure will be worked on