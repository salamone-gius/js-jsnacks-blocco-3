// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.

// 1. faccio inserire un numero all'utente
let userNumber;

do {
    userNumber = Number(prompt("Inserisci un numero"));
} while (isNaN(userNumber))

console.log(userNumber);

// 2. genero tanti array quanto è il valore di userNumber, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne creo uno, lo stampo
for (let i = 0; i < userNumber; i++) {
    let newArray = [];
    for (let i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        newArray.push(randomNumber);
    }
    console.log(newArray);
}