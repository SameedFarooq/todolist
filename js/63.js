//var element;
//element=document.getElementById("body").innerText;
//element=document.getElementById("body").innerHTML;
//element=document.getElementById("header").getAttribute("style");
//console.log(element);

var element2;
//element2=document.getElementById("header").innerHTML;
document.getElementById("header").innerHTML="<h1>WOWING</h1>";
//document.getElementById("header").setAttribute=("class","xyz");
document.getElementById("header").setAttribute=("style","border:10px dotted yellow;");
element2=document.getElementById("header").getAttribute("class");
console.log(element2);