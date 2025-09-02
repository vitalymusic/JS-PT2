// function count(skaitlis1,skaitlis2){
//    document.write(skaitlis1+skaitlis2);
// }
function count(skaitlis1,skaitlis2){
//   return {result:skaitlis1+skaitlis2};
  return [
        skaitlis1+skaitlis2,
        skaitlis1-skaitlis2,
        skaitlis1*skaitlis2,
        skaitlis1/skaitlis2,
];
}


function execute(){
    console.log(count(4,8));
    console.log(count(123,678));
    console.log(count(1,5));
    console.log(count(890,123));
}

execute();


// const atnemsana = (skaitlis1,skaitlis2)=>{
//     return skaitlis1-skaitlis2;
// };

// const sayHello = name=>{ return "Hello, ",name}

// alert(sayHello("Vitaly"));


