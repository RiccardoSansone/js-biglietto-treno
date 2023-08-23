//chiedo all'utente quanti km vuole percorrere
let km = Number(prompt('quanti chilometri desideri percorrere?'));
//chiedo all'utente quanti anni ha
let age = Number(prompt('quanti anni hai?'));
//stampo in console i numeri comunicati dall'utente 
console.log(km, age);
//determino il prezzo non scontato moltiplicando il costo a km per i km da percorrere
let prezzo = (km * 0.21);
//creo un controllo per distinguere i minorenni e gli anziani e determino i prezzi da pagare
if(age < 18){
    prezzo = (prezzo / 100 * 20);
}else if(age > 65){
    prezzo = (prezzo / 100 * 40);
}
//stampo in console il risultato
console.log("il prezzo del tuo biglietto e' " + Math.round(prezzo * 100) / 100 + '€');
//stampo sul documento il risultato
document.getElementById('price').innerHTML = ("il prezzo del tuo biglietto e' " + Math.round(prezzo * 100) / 100 + '€');