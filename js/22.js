var inputText=document.getElementById('txt'),
 items=document.querySelectorAll("#list li"),
tab=[], index;

for(var i=0; i<items.length;i++){
    tab.push(items[i].innerHTML);
}
for(var i=0; i<items.length;i++){
    items[i].onclick=function(){
        index=tab.indexOf(this.innerHTML);
        console.log(this.innerHTML+"INDEX="+index);
        inputText.value=this.innerHTML;
    };
} 
function refresh(){
    //clear array
    tab.length=0; 
    items=document.querySelectorAll("#list li"); 
    for(var i=0; i<items.length;i++){
        tab.push(items[i].innerHTML);
    } 
}
function addLi(){
    var listNode=document.getElementById('list');
    textNode=document.createTextNode(inputText.value);
    liNode=document.createElement('li');
    liNode.appendChild(textNode);
    listNode.appendChild(liNode);
    refresh();
    
    liNode.onclick=function(){
       debugger
        index=tab.indexOf(liNode.innerHTML);
        console.log(liNode.innerHTML+"INDEX="+index);
        inputText.value=liNode.innerHTML;
};
// inputText.value="";

}
function editLi(){
    items[index].innerHTML=inputText.value;
    refresh();
}
function deleteLi(){
    refresh();
    if(items.length>0){
        items[index].parentNode.removeChild(items[index]);
        inputText.value="";
    }

}