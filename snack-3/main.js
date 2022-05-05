// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// 1. creo due div con id diversi e con stile diverso
let red = document.createElement("div");
red.id = "red";
red.style.color ="red";
console.log(red);

let green = document.createElement("div");
green.id = "green";
green.style.color ="green";
console.log(green);

// 2. li appendo all'HTML
let oddList = document.querySelector("div.odd");
oddList.append(red);

let evenList = document.querySelector("div.even");
evenList.append(green);


// 3. creo un array vuoto e lo popolo con numeri casuali
let array = [];
console.log(array);

for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    array.push(randomNumber);
}
console.log(array);

// 4. scorro array con un ciclo. SE il numero incontrato è pari, lo stampo nel div #red, ALTRIMENTI SE è dispari, lo stampo nel div #green
for (let i = 0; i < array.length; i++) {
    if ((array[i] % 2) === 1) {
        red.innerText = array[i];
    } else ((array[i] % 2) === 0); {
        green.innerText = array[i];
    }
}

