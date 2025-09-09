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
    // console.log(event)
    if(event.key=='Escape'){
         document.body.style.background = "none";
         document.body.style.fontSize = "1rem";
    }
}


// 3. Satura mainīšana elementā
virsraksts1.innerText = "Tagad ir jauns virsraksts";

btn2.innerText = "Izlabot dokumenta virsrakstu";

btn2.onclick = ()=>{
    document.title = virsraksts1.innerText;
    document.querySelector('div').innerHTML = "";
}



document.querySelector('div').innerHTML = `
    <h3>This is new title</h3>
    <p class="added_text">Te ir jauns pieivenots teksts</p>
    <img src="">
`;

virsraksts1.innerText += " Vēl viens teksts";

document.querySelector('div').innerHTML+=`
    <form>
        <select id="select">


        </select>
    </form>
`;


for(let year = 1900;year <= 2025; year++){
      document.querySelector('#select').innerHTML+=`
        <option value="${year}">${year}</option> 
      `  
}


// 1. Izveidot datu ievades laukus
// 2. Nolasīt no laukiem nepieciešamos datus
// Parādīt ar ciklu attēlus no Picsum pēc ievadītiem ID


document.body.innerHTML += `
    <h2>Galerija</h2>
    <input type="number" id="num1"> -  <input type="number" id="num2">
    <button id="showPicturesBtn">Parādīt bildes</button>
    <div class="pictures" style="margin-top:20px">

    </div>
`

document.querySelector('#showPicturesBtn').onclick = ()=>{
        let num1 = +document.querySelector('#num1').value;
        let num2 = +document.querySelector('#num2').value;

        // Notīrīt pirms bilžu ielkšanas 
        document.querySelector('.pictures').innerHTML = "";

       for(let bilde = num1; bilde <= num2;bilde++){
               document.querySelector('.pictures').innerHTML+=`
                <img src="https://picsum.photos/id/${bilde}/200/300" > 
               ` 
       } 

        // Notīra datu laukus pēc bilžu ielikšanas
            
       document.querySelector('#num1').value="";
       document.querySelector('#num2').value="";
}
