let laiks = new Date();

let tekosais = Date.now();

let pec_nedelas = tekosais+(1000*60*60*24*7); //UTC laika un datuma formāts

let laiks_pec_nedelas = new Date(pec_nedelas);

result = {
    datums:laiks.getDate(),
    menesis:laiks.getMonth()+1,
    gads:laiks.getFullYear(),
    stundas:laiks.getHours(),
    minutes:laiks.getMinutes(),
    sekundes:laiks.getSeconds(),
};


result2 = {
    datums:laiks_pec_nedelas.getDate(),
    menesis:laiks_pec_nedelas.getMonth()+1,
    gads:laiks_pec_nedelas.getFullYear(),
    stundas:laiks_pec_nedelas.getHours(),
    minutes:laiks_pec_nedelas.getMinutes(),
    sekundes:laiks_pec_nedelas.getSeconds(),
}

document.write(`Pašlaik ir: 
    ${result.menesis<10?"0"+result.menesis:result.menesis}.
    ${result.gads}, 
    ${result.stundas}:${result.minutes}:${result.sekundes}`,"<br>");

document.write(`Pēc nedēļas būs: 
    ${result2.datums}.
    ${result2.menesis}.
    ${result2.gads}, 
    ${result2.stundas}:${result.minutes}:${result.sekundes}`);


console.log(tekosais,pec_nedelas,laiks_pec_nedelas);

