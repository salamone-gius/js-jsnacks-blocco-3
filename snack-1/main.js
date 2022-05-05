// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// 1. creo un array vuoto
let list = [];
console.log(list);

// 2. creo una variabile con valore 0
let sum = 0;
console.log(sum);

// 3. chiedo all'utente un numero da inserire nell'array fino a quando la somma degli elementi è minore di 50
while ( sum < 50) {
    let newNumber = Number(prompt("Inserisci un numero da 1 a 50"));
    if (newNumber > 50) {
        let newNumber = Number(prompt("Ti ho detto un numero da 1 a 50!!!!"));
    } else {
        list.push(newNumber);
        sum = sum + newNumber;
        console.log(list, newNumber, sum);  
    }
}