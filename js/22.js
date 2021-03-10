let btn1=document.getElementById('btn1');
let input1=document.getElementById('input1');
let addtodo=document.getElementById('addtodo');
let contain=document.getElementById('contain');
let end=document.getElementById('end');

// let =document.getElementById('');
btn1.addEventListener('click',function(){
  
var paragraph = document.createElement('p');
paragraph.innerText = input1.value;
addtodo.appendChild(paragraph);
input1.value="";

var ad=document.createElement('button');
ad.innerHTML="EDIT";
ad.className="add";
var remove=document.createElement('button');
remove.innerHTML="Remove";
remove.className="remove";
addtodo.appendChild(ad);
addtodo.appendChild(remove); 
ad.addEventListener('click',function(){

var btn2=contain.appendChild(btn1);
contain=btn2.parentElement;
btn2.className="new";
btn2.addEventListener('click',function(){
    btn2=input1.nextElementSibling;             
})    
    input1.value=paragraph.innerText;

     addtodo.removeChild(ad);
 addtodo.removeChild(remove);
     addtodo.removeChild(paragraph);
    //  var parent=btn1.parentNode;
    //  parent.removeChild(btn1);
})

remove.addEventListener('click',function(){
    addtodo.removeChild(paragraph);
    addtodo.removeChild(ad);
addtodo.removeChild(remove);

})

    // btn1.innerHTML="+";
    // btn1.className="btn1";
//    console.log("this is");
    // input1.insertAdjacentElement("afterbegin",newbtn);
})






