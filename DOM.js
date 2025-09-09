// DOM 


// 1. Elementu atlase no dokumenta pēc CSS selektora

let virsraksts1 = document.querySelector('h1');
let virsraksts2 = document.querySelector('h2');
let rindkopa = document.querySelector('.content');

let btn1 = document.querySelector('#btn_1');
let btn2 = document.querySelector('#btn_2');
let btn3 = document.querySelector('#btn_3');

// 1. Elementu atlase no dokumenta pēc CSS selektora (atlasa vairākus uzreiz)

let btns = document.querySelectorAll('button');

console.log(virsraksts1,btns);


// Vecās atlases metodes

// document.getElementById('')
// document.getElementsByName('')
// document.getElementsByClassName('')

// let oldMethod = document.getElementsByTagName('div');

// console.log(oldMethod)


// 2. Notikumi

virsraksts1.onclick = function(){
    document.body.style.background = "#be1212ff";
}
virsraksts1.onmouseenter = function(){
    virsraksts1.style.color = "#0d41deff";
}

virsraksts1.onmouseleave = function(){
    virsraksts1.style.color = "#11de0dff";
}

document.body.onkeyup = function(event){
    console.log(event)
    if(event.key=='Escape'){
         document.body.style.background = "none";
    }
}