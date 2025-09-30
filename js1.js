document.write("Cits kods");

//  šeit ir komentārs
console.log("tests");

// var int1;

let int2;
let pirmaisSkaitlis;

// camelCase

// Datu tipi
// Int, Float(Double)

let sk1 = 25.45;
// String
let teksts = "Teksts1";
let teksts2 = '<h1>Virsraksts</h1>';
let teksts3 = `<img src="">`;

// Boolean

let bool1 = true;
let bool2 = false;


// Saliktie datu tipi

// Masīvs
let arr1 = [sk1,teksts2,bool1,["balta","melna"],{}];

// Objekts
let obj1 = {
    marka:"Ford",
    modelis:teksts3,
    cena:2500,
    jauna: false,
    krāsas:["balta","melna"] 
}

// JSON formāts - kas ir Javascript Object Notation

// Datu izvade

// Pašā dokumentā
document.write(teksts2);
document.write(obj1.marka," ",obj1.cena);
document.write("<br>",arr1);
document.write("<br>",arr1[1]);

// Konsole

console.log(arr1,obj1);


// Operatori

// Matemātiskie operatori
// +-*/% ** += -= *= /= ++ --

let garums = 25,platums = 45;
document.write(garums * platums);
garums+=10;
platums --;
document.write(garums,platums);

// Konkatenācija tikai STRING datu tipiem
    // +

  document.write(teksts2+"<br>"+"Teksts2");  
  document.write(teksts2+"<br>"+teksts3);  
//   document.write("<img src=\"https://picsum.photos/200/300\">");  

let address="https://picsum.photos/200/300";

document.write("<img src="+address+">");  

document.write(`<img src="${address}" width="400px">`);  


// Skaitļu funkcijas
let skaitlis4 = 23.567798789;

console.log(skaitlis4.toFixed(2)); //noapaļo
let jauns = skaitlis4.toString();


// Math
jauns = Math.trunc(skaitlis4);

console.log(jauns); 

// Datu ielāde no lietotāja ievades
// let ievade1 = +prompt("Ievadiet pirmo skaitli");
// let ievade2 = +prompt("Ievadiet otru skaitli");
  

// document.write(ievade1+ievade2);


// teksta funkcijas

console.log(teksts.toUpperCase());
console.log(teksts.toLowerCase());

console.log(teksts.charAt(5));
console.log(teksts.slice(2,4));
teksts = teksts.replace('Teksts1','Attēli palīdz tīmeklim piešķirt vairāk krāsu un dzīvības. Šajā ierakstā ir aprakstīts, kā attēlus attēlo cilvēki un dažādās ierīcēs, sniedzot informāciju par krāsu telpām un redzes teoriju.');
console.log(teksts);
console.log(teksts.search(`telpām`));
let result = teksts.split(' ');

console.log(result.length);
console.log(teksts.length);