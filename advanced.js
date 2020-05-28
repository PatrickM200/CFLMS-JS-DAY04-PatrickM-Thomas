

document.getElementById("circle").onmouseover=function(){
  document.getElementById("txt").innerHTML="you are in the circle";
};

document.getElementById("circle").onmouseout=function(){
  document.getElementById("txt").innerHTML="you are outside of the circle";
};

document.getElementById("circle").onclick=function(){
  document.getElementById("circle").style.backgroundColor="grey";
};

document.getElementById("circle").ondblclick=function(){
  document.getElementById("circle").style.backgroundColor="blue";
};

