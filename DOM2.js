// Elementu pievienošana ar JS

let dialog1 = document.createElement("dialog");
let dialogTitle = document.createElement("h3");
let dialogTitleText = document.createTextNode("Labrīt");
let dialogImg = document.createElement("img");
let dialogText = document.createElement("p");
let openDialogBtn = document.createElement("button");





// Elementu ievietošana

dialogTitle.append(dialogTitleText);

openDialogBtn.innerText = "Atvērt dialogu!";

document.body.append(openDialogBtn);

document.body.append(dialog1);

dialog1.append(dialogTitle,dialogImg,dialogText);

dialogText.innerText = "Dialoga teksta saturs";
dialogImg.src = "bilde.jpg";
dialogImg.width = "300";


dialog1.setAttribute("id","dialog1");
dialog1.setAttribute("data-open","false");


let text = dialog1.getAttribute("data-open");

// CSS klases pievienošana-noņemšana
dialogTitle.classList.add("text-center");


