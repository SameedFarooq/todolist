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

let ad=document.createElement('button');
ad.innerHTML="EDIT";
ad.className="add";
let remove=document.createElement('button');
remove.innerHTML="Remove";
remove.className="remove";
addtodo.appendChild(ad);
addtodo.appendChild(remove); 
ad.addEventListener('click',function(){
innn();
    
    input1.value=paragraph.innerText;

    addtodo.removeChild(ad);
addtodo.removeChild(remove);
     addtodo.removeChild(paragraph);
     var parent=btn1.parentNode;
     parent.removeChild(btn1);
})

remove.addEventListener('click',function(){
    addtodo.removeChild(paragraph);
    addtodo.removeChild(ad);
addtodo.removeChild(remove);

})
function innn(){
    var newbtn=document.createElement("button")
     document.body.appendChild(newbtn);
    newbtn.innerHTML="Save";
    newbtn.className="btn1";
    console.log("this is");
    // input1.insertAdjacentElement("afterbegin",newbtn);
    newbtn.addEventListener('click',function(){
        var  newinput=input1.value;
        var para=document.createElement('p');
        para.innerText=newinput;
        console.log(para);
        end.appendChild(para);
        end.className="divv";
    document.body.removeChild(newbtn);
    document.body.appendChild(btn1);
    btn1.className="btn2";
     input1.value="";

   })
}




})

