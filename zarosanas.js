// if(false){
//     alert("test")
// }else if(true){
//     document.body.innerHTML = "";
//     document.write("false");
// }else if(true){

// }else{

// }


let diena = 2;
let menesis = 45;

if(diena == 2 && menesis == 9){
    
}
if(diena == 2 || menesis == 9){

}

document.write("Mēnesis ir: ",menesis<10?"0"+menesis:menesis); //ternārais operators
let nosaukums = "";    

switch(menesis){
    case 1: nosaukums = "Janvāris";break;
    case 2: nosaukums ="Februāris";break;
    case 3: nosaukums = "Marts";break;
    default: nosaukums = "Cits mēnesis"
}

console.log(nosaukums);


