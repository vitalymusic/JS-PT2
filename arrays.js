// Masīvu metodes


let arr1 = [];


// Elementu pievienošanā masīvos

arr1.push(10);
arr1.push("teksts");
arr1.push({
    username:"user1",
    email:"user1@gmail.com"
});

arr1.pop() //elementu dzēšana no beigām


// Pievieno sākumā

arr1.unshift(5);

arr1.shift();  //nodzēš no sākuma

let result = arr1.slice(0,2);


arr2 = ["Cars","Toys",34];

result = arr1.concat(arr2);

result = [...arr1,...arr2];


const texts = [
  "Sveiki, pasaule!",
  "Rīts sākas ar kafiju.",
  "Programmēšana ir interesanta.",
  "Mācos JavaScript katru dienu.",
  "Šodien spīd saule.",
  "Datu masīvi ir noderīgi.",
  "Regulārās izteiksmes ir jaudīgas.",
  "DOM manipulācija bez jQuery.",
  "Testēšana uzlabo kodu.",
  "Labrīt no Rīgas!"
];


texts.forEach(function(item,i,arr){
    console.log("Nr: "+i+1 + " "+ item);
})


// console.log(result.length);