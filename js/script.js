//Realizzare una variabile alla quale assegno un prompt per chiedere all'utente i km che dovrà percorrere//
let km = prompt('Inserisci i km da percorrere');

//Realizzare una variabile alla quale assegno un prompt per chiedere all'utente la sua età //
let eta = prompt('Inserisci la tua età');

//Realizzo variabile che contiene il prezzo base//
let prezzo_base = km * 0.21;
console.log(prezzo_base);

//SE età inferiore a 18 applico sconto del 20%//
if(eta < 18){
    //Calcolo lo sconto a partire dal prezzo
    // let sconto = prezzo_base * 20 / 100;
    let sconto = prezzo_base * 0.2;
    //Calcolo il prezzo finale
    prezzo_finale = prezzo_base - sconto;
    // prezzo_finale = prezzo_base * 0.8;
} //ALTRIMENTI SE eta superiore a 65 applico uno sconto del 40%;
else if(eta > 65){
    //Calcolo lo sconto a partire dal prezzo base
    let sconto = prezzo_base * 0.4;
    //Calcolo il prezzo finale;
    prezzo_finale = prezzo_base - sconto;
    
}

else{
    prezzo_finale = prezzo_base
    console.log(prezzo_finale);
}

document.getElementById('prezzo_finale').innerHTML = `Il tuo biglietto costa ${prezzo_finale.toFixed(2)}€`



