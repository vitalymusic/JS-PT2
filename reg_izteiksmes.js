// Regulārās izteiksmes

let izteiksme1 = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm


let lietotaja_parole = prompt("ievadi paroli");

if(lietotaja_parole.match(izteiksme1)){
    document.write("Parole ir droša")
}else{
    document.write("Parole nav droša")
}
