let colors=['blue','green','yellow','brown','red'];

let button=document.getElementById('button');

button.addEventListener('click',function(){
    debugger
    var randomcolor =colors[Math.floor(Math.random()*colors.length )];
    let container =document.getElementById('container');
    container.style.background = randomcolor;
})