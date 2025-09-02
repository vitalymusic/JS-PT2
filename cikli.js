let skaitlis = 0; //inicializācija

//1. veids

// while(skaitlis <= 10){
//     document.write(skaitlis,"<br>");
//     skaitlis++; 
// }

//2. veids
// do{
//  document.write(skaitlis,"<br>");
//  skaitlis++; 
// }
// while(skaitlis <= 10);


// 3 veids

for(let skaitlis1 = 0; skaitlis1 <= 100; skaitlis1 +=5){
     document.write(skaitlis1,"<br>");
}

const menesi = [
  "Janvāris",
  "Februāris",
  "Marts",
  "Aprīlis",
  "Maijs",
  "Jūnijs",
  "Jūlijs",
  "Augusts",
  "Septembris",
  "Oktobris",
  "Novembris",
  "Decembris"
];

for(menesis of menesi){
        document.write("<h1>",menesis,"</h1>");
}

// for(let i = 0; i<menesi.length;i++){
//       document.write("<h1>",menesi[i],"</h1>");
// }


// for in
const persona = {
  vards: "Jānis",
  uzvards: "Bērziņš",
  vecums: 28,
  dzimums: "vīrietis",
  pilseta: "Rīga",
  valsts: "Latvija",
  telefons: "+37112345678",
  epasts: "janis.berzins@example.com",
  hobiji: ["sports", "mūzika", "ceļošana"],
  irStudents: false
};

for( field in persona){
     document.write("<h1>",field,":",persona[field],"</h1>");
} 


